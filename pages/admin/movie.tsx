import { ChangeEvent, useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { Layout } from '../../components/index';
import { movieApi } from '../../utils/api';
import { postMovieProps } from '../../utils/interface';
const genres: string[] = [
	'액션',
	'범죄',
	'SF',
	'코미디',
	'스릴러',
	'공포',
	'전쟁',
	'스포츠',
	'판타지',
	'음악',
	'뮤지컬',
	'멜로',
];
const movie = () => {
	const [info, setInfo] = useState<postMovieProps>({
		movie_name: null,
		movie_description: null,
		movie_poster_url: null,
		actor_names: null,
		director_name: null,
		distributor_name: null,
		genres: [],
		moviegrade_num: '1',
		running_time: null,
		is_screening: 'Y',
	});
	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (!name) return;
		setInfo({ ...info, [name]: value });
	};
	const handleGenres = (e, value) => {
		setInfo({ ...info, genres: value });
	};
	console.log(info);

	const handleClick = async () => {
		for (let key in info) {
			if (info[key] === null || info[key] === '') {
				alert('정보를 모두 입력해주세요.');
				return;
			}
		}
		if (!/^[0-9]{1,}$/.test(String(info.running_time))) {
			alert('상영 시간을 정확히 숫자만 입력해주세요.');
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
				<FormControl variant="outlined" className="movie-input">
					<InputLabel htmlFor="age-native-simple">Age</InputLabel>
					<Select
						native
						value={info.moviegrade_num}
						inputProps={{
							name: 'moviegrade_num',
						}}
					>
						<option value="1">전체 관람가</option>
						<option value="2">12세이상 관람가</option>
						<option value="3">15세이상 관람가</option>
						<option value="4">청소년 관람불가</option>
					</Select>
				</FormControl>
				<FormControl variant="outlined" className="movie-input">
					<InputLabel htmlFor="age-native-simple">상영 여부</InputLabel>
					<Select
						native
						value={info.is_screening}
						inputProps={{
							name: 'is_screening',
						}}
					>
						<option value="y">Y</option>
						<option value="n">N</option>
					</Select>
				</FormControl>
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
				<ToggleButtonGroup value={info.genres} onChange={handleGenres}>
					{genres.map((genre) => (
						<ToggleButton
							style={{ color: 'darkblue', fontWeight: 'bold' }}
							value={genre}
						>
							{genre}
						</ToggleButton>
					))}
				</ToggleButtonGroup>
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
