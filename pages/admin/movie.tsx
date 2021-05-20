import { ChangeEvent, useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Layout } from '../../components/index';
import { movieApi } from '../../utils/api';
import { postMovieProps } from '../../utils/interface';
const movie = () => {
	const [info, setInfo] = useState<postMovieProps>({
		movie_name: null,
		movie_description: null,
		movie_poster_url: null,
		actor_names: null,
		director_name: null,
		distributor_name: null,
		genres: null,
		moviegrade_num: null,
		running_time: null,
		is_screening: null,
	});
	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setInfo({ ...info, [name]: value });
	};
	const handleClick = async () => {
		for (let key in info) {
			if (info[key] === null || info[key] === '') {
				alert('정보를 모두 입력해주세요.');
				return;
			}
		}
		if (!/^[yn]{1}$/.test(String(info.is_screening))) {
			alert('상영 여부를 정확히 입력해주세요.');
			return;
		}
		if (!/^[0-9]{1,}$/.test(String(info.running_time))) {
			alert('상영 시간을 정확히 숫자만 입력해주세요.');
			return;
		}
		if (!/^[0-9]{1,}$/.test(String(info.moviegrade_num))) {
			alert('등급을 정확히 숫자만 입력해주세요.');
			return;
		}
		try {
			await movieApi.postMovie({ ...info, running_time: Number(info.running_time) });
		} catch (e) {
			throw new Error(e);
		}
	};
	return (
		<Layout>
			<h1 id="movie-header">영화 추가</h1>
			<div id="movie-container" onChange={handleInput}>
				<TextField
					className="movie-input"
					name="movie_name"
					label="영화 제목"
					variant="outlined"
				/>
				<TextField
					className="movie-input"
					name="director_name"
					label="감독"
					variant="outlined"
				/>
				<TextField
					className="movie-input"
					name="distributor_name"
					label="배급사"
					variant="outlined"
				/>
				<TextField
					className="movie-input"
					label="상영 시간(분)"
					name="running_time"
					placeholder="ex : 120"
					variant="outlined"
				/>
				<TextField
					className="movie-input"
					name="moviegrade_num"
					label="등급"
					placeholder="ex : 12"
					variant="outlined"
				/>
				<TextField
					className="movie-input"
					name="is_screening"
					label="상영 여부"
					placeholder="y or n"
					variant="outlined"
				/>
				<TextField
					className="movie-input"
					name="actor_names"
					label="배우"
					placeholder="배우명, 배우명, ..."
					variant="outlined"
				/>
				<TextField
					className="movie-input"
					name="movie_poster_url"
					label="포스터"
					placeholder="url"
					variant="outlined"
				/>
				<TextField
					className="movie-input"
					name="genres"
					label="장르"
					placeholder="ex : 스릴러,판타지,..."
					variant="outlined"
				/>
				<TextField
					className="movie-input"
					name="movie_description"
					multiline
					label="줄거리"
					variant="outlined"
				/>
				<Button variant="contained" color="primary" onClick={handleClick}>
					추가하기
				</Button>
			</div>
		</Layout>
	);
};

export default movie;
