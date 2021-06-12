import { useState, ChangeEvent } from 'react';
import { Modal, TextField, IconButton, FormControl, InputLabel, Select } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { Close, Edit } from '@material-ui/icons';
import { postMovieProps } from '../utils/interface';
import { useStyles } from '../utils/functions';
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
const MovieModal = ({ open, setOpen, patchMovie }) => {
	const classes = useStyles();
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
		is_screening: 'y',
	});
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (!name) return;
		setInfo({ ...info, [name]: value });
	};
	const handleGenres = (e, value) => {
		setInfo({ ...info, genres: value });
	};

	return (
		<Modal open={open} onClose={() => setOpen(false)}>
			<div className={classes.paper} id="modal-container" onChange={handleChange}>
				<h1>영화 정보 수정</h1>
				<TextField
					style={{ width: '300px' }}
					name="movie_name"
					label="영화 제목"
					variant="outlined"
				/>
				<TextField
					style={{ width: '300px' }}
					name="director_name"
					label="감독"
					variant="outlined"
				/>
				<TextField
					style={{ width: '300px' }}
					name="distributor_name"
					label="배급사"
					variant="outlined"
				/>
				<TextField
					style={{ width: '300px' }}
					label="상영 시간(분)"
					name="running_time"
					placeholder="ex : 120"
					variant="outlined"
				/>
				<FormControl variant="outlined">
					<InputLabel htmlFor="age-native-simple">Age</InputLabel>
					<Select
						native
						style={{ width: '300px' }}
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
				<FormControl variant="outlined">
					<InputLabel htmlFor="age-native-simple">상영 여부</InputLabel>
					<Select
						native
						style={{ width: '300px' }}
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
					style={{ width: '300px' }}
					name="actor_names"
					label="배우"
					placeholder="배우명, 배우명, ..."
					variant="outlined"
				/>
				<TextField
					style={{ width: '300px' }}
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
					style={{ width: '300px' }}
					name="movie_description"
					multiline
					label="줄거리"
					variant="outlined"
				/>
				<div>
					<IconButton name="edit" onClick={() => patchMovie(info)}>
						<Edit />
					</IconButton>
					<IconButton name="delete" onClick={() => setOpen(false)}>
						<Close />
					</IconButton>
				</div>
			</div>
		</Modal>
	);
};

export default MovieModal;
