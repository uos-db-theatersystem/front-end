import Link from 'next/link';
import Layout from '../components/Layout';
import Head from 'next/head';
import MovieThumb from '../components/MovieThumb';
import { Button } from '@material-ui/core';
import BottomMenu from '../components/BottomMenu';

// 현재 상영작, 메인 페이지
const Index = () => {
	let id: Number = 1;
	return (
		<Layout>
			<Head>
				<title>Theater</title>
			</Head>
			<p id="main-title">현재 상영작</p>
			<div id="main-container">
				<div className="main-movie">
					<MovieThumb />
					<Button variant="outlined" color="primary">
						예매하기
					</Button>
				</div>
				<div className="main-movie">
					<MovieThumb />
					<Button variant="outlined" color="primary">
						예매하기
					</Button>
				</div>
				<div className="main-movie">
					<MovieThumb />
					<Button variant="outlined" color="primary">
						예매하기
					</Button>
				</div>
				<div className="main-movie">
					<MovieThumb />
					<Button variant="outlined" color="primary">
						예매하기
					</Button>
				</div>
				<div className="main-movie">
					<MovieThumb />
					<Button variant="outlined" color="primary">
						예매하기
					</Button>
				</div>
				<BottomMenu />
			</div>
		</Layout>
	);
};

export default Index;
