import { useState } from 'react';
import { Layout, MovieThumb } from '../components/index';
import { TextField, InputAdornment, CircularProgress } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { movieApi } from '../utils/api';
import { movieListProps } from '../utils/interface';

const search = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [movies, setMovies] = useState<movieListProps[]>([]);
	let timer: any;
	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(async function () {
			setLoading(true);
			try {
				if (e.target.value === '') {
					setMovies([]);
				} else {
					setMovies(await movieApi.getSearch(e.target.value));
				}
			} catch (e) {
				alert('검색중 오류가 발생했습니다.');
			} finally {
				setLoading(false);
			}
		}, 700);
	};

	return (
		<Layout>
			<div className="search-container">
				<div className="search-header">
					<TextField
						className="search-input"
						placeholder="Movie title"
						onChange={handleSearch}
						variant="outlined"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon fontSize="large" />
								</InputAdornment>
							),
						}}
					/>
				</div>
				<div id="main-container">
					{loading ? (
						<CircularProgress />
					) : movies.length === 0 ? (
						<p>검색된 영화가 없습니다.</p>
					) : (
						movies.map((movie) => (
							<div className="main-movie">
								<MovieThumb
									movie_num={movie.movie_num}
									movie_poster_url={movie.movie_poster_url}
									movie_description={movie.movie_description}
								/>
							</div>
						))
					)}
				</div>
			</div>
		</Layout>
	);
};

export default search;
