import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '../..//components/Layout';
import { Button } from '@material-ui/core';
import { movieApi } from '../../utils/api';
import { movieProps } from '../../utils/interface';

// 영화 세부 정보
const detail = () => {
	const router = useRouter();
	const [info, setInfo] = useState<movieProps | null>(null);

	useEffect(() => {
		(async () => {
			try {
				if (!router.isReady) return;
				const { id } = router.query;
				setInfo(await movieApi.getInfo(id));
			} catch (e) {
				throw new Error(e);
			}
		})();
	}, [router.isReady]);
	return (
		info && (
			<Layout>
				<div id="detail-container">
					<img id="detail-img" src={info.movie_poster_url} />
					<div id="detail-head">
						<b>{info.movie_name}</b>
						<Link href={`/schedules?movie_num=${info.movie_num}`}>
							<Button variant="outlined" color="primary">
								예매하기
							</Button>
						</Link>
					</div>
				</div>
				<div id="detail-info">
					<h2>{info.movie_description}</h2>
					<hr color="black" />
					<h3>출연진 : {info.actor_names}</h3>
					<h3>
						감독 : {info.director_name} | 배급사 : {info.distributor_name} | 등급 :{' '}
						{info.grade}
					</h3>
					<h3>
						장르 : {info.genres} | 상영시간 : {info.running_time}분
					</h3>
				</div>
			</Layout>
		)
	);
};

export default detail;
