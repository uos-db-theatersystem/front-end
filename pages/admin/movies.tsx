import React, { useState, useEffect } from 'react';
import { Layout, NewScheduleModal, MovieModal } from '../../components/index';
import { movieState } from '../../utils/states';
import { movieApi, schedulesApi } from '../../utils/api';
import { useRecoilState } from 'recoil';
import { ListItem, List, Divider, IconButton } from '@material-ui/core';
import { Close, Edit, Add } from '@material-ui/icons';
import { newScheduleProps, postMovieProps } from '../../utils/interface';
const movies = () => {
	const [movies, setMovies] = useRecoilState(movieState);
	const [open, setOpen] = useState<boolean>(false);
	const [editOpen, setEditOpen] = useState<boolean>(false);
	const [movieIdx, setMovieIdx] = useState<number>(0);
	useEffect(() => {
		(async () => {
			try {
				setMovies(await movieApi.getList());
			} catch (e) {
				throw new Error(e);
			}
		})();
	}, []);
	const handleClick = async (e: any) => {
		const { name, dataset } = e.target.closest('button');

		if (name === 'delete') {
			try {
				await movieApi.deleteMovie(dataset.id);
				setMovies(movies.filter((movie) => movie.movie_num !== Number(dataset.id)));
			} catch (e) {
				throw new Error(e);
			}
		} else if (name === 'add') {
			setMovieIdx(Number(dataset.id));
			setOpen(true);
		} else if (name === 'edit') {
			setMovieIdx(Number(dataset.id));
			setEditOpen(true);
		}
	};
	const addSchedule = async (data: newScheduleProps) => {
		data.movie_num = movieIdx;
		try {
			await schedulesApi.postSchedule(data);
			alert('상영일정이 성공적으로 추가됐습니다.');
			setOpen(false);
		} catch (e) {
			alert('상영 일정 추가중 오류가 발생했습니다.');
		}
	};
	const patchMovie = async (data: postMovieProps) => {
		try {
			await movieApi.patchMovie(data, movieIdx);
			alert('영화가 성공적으로 수정됐습니다.');
			setEditOpen(false);
		} catch (e) {
			alert('영화 수정중 오류가 발생했습니다.');
		}
	};
	return (
		<Layout>
			<h1 id="movie-header">영화 목록</h1>
			<List
				className="search-list"
				style={{ padding: '0 0' }}
				component="nav"
				onClick={handleClick}
			>
				{movies.map((movie) => (
					<div key={movie.movie_num}>
						<ListItem>
							<p>{movie.movie_name}</p>
							<div style={{ marginLeft: 'auto' }}>
								<IconButton name="add" data-id={movie.movie_num}>
									<Add />
								</IconButton>
								<IconButton name="delete" data-id={movie.movie_num}>
									<Close />
								</IconButton>
								<IconButton name="edit" data-id={movie.movie_num}>
									<Edit />
								</IconButton>
							</div>
						</ListItem>
						<Divider />
					</div>
				))}
			</List>
			<NewScheduleModal open={open} setOpen={setOpen} addSchedule={addSchedule} />
			<MovieModal open={editOpen} setOpen={setEditOpen} patchMovie={patchMovie} />
		</Layout>
	);
};

export default movies;
