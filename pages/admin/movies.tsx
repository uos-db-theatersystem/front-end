import React, { useEffect } from 'react';
import { Layout } from '../../components/index';
import { movieState } from '../../utils/states';
import { movieApi } from '../../utils/api';
import { useRecoilState } from 'recoil';
import { ListItem, List, Divider, IconButton } from '@material-ui/core';
import { Close, Edit } from '@material-ui/icons';
const movies = () => {
	const [movies, setMovies] = useRecoilState(movieState);
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
		const { name, dataset } = e.target;

		if (name === 'delete') {
			try {
				await movieApi.deleteMovie(dataset.id);
				setMovies(movies.filter((movie) => movie.movie_num !== Number(dataset.id)));
			} catch (e) {
				throw new Error(e);
			}
		}
	};

	return (
		<Layout>
			<h1 id="movie-header">영화 목록</h1>
			<List className="search-list" style={{ padding: '0 0' }} component="nav">
				{movies.map((movie) => (
					<div key={movie.movie_num}>
						<ListItem onClick={handleClick}>
							<p>{movie.movie_name}</p>
							<div style={{ marginLeft: 'auto' }}>
								<IconButton name="edit" data-id={movie.movie_num}>
									<Edit />
								</IconButton>
								<IconButton name="delete" data-id={movie.movie_num}>
									<Close />
								</IconButton>
							</div>
						</ListItem>
						<Divider />
					</div>
				))}
			</List>
		</Layout>
	);
};

export default movies;
