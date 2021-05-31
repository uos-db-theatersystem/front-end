import Link from 'next/link';
import Layout from '../components/Layout';
import Head from 'next/head';
import { MovieThumb, BottomMenu } from '../components/index';
import { Button } from '@material-ui/core';
import { useEffect } from 'react';
import { movieApi } from '../utils/api';
import { movieState } from '../utils/states';
import { useRecoilState } from 'recoil';
// 현재 상영작, 메인 페이지
const Index = () => {
	const [movies, setMovies] = useRecoilState(movieState);
	console.log('movies', movies);
	useEffect(() => {
		(async () => {
			try {
				setMovies(await movieApi.getList());
			} catch (e) {
				throw new Error(e);
			}
		})();
	}, []);

	return (
		<Layout>
			<Head>
				<title>Theater</title>
			</Head>
			<p id="main-title">현재 상영작</p>
			<div id="main-container">
				{movies === [] ? (
					<p id="main-title">현재 상영작이 없습니다.</p>
				) : (
					movies.map(
						(movie) =>
							movie.is_screening === 'y' && (
								<div className="main-movie">
									<MovieThumb
										movie_num={movie.movie_num}
										movie_poster_url={movie.movie_poster_url}
										movie_description={movie.movie_description}
									/>
									<Link href={`/schedules?movie_num=${movie.movie_num}`}>
										<Button variant="outlined" color="primary">
											예매하기
										</Button>
									</Link>
								</div>
							)
					)
				)}

				<BottomMenu />
			</div>
		</Layout>
	);
};

export default Index;
