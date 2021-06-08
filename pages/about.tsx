import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { Paper, CircularProgress } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { authApi } from '../utils/api';
import { userInfoProps } from '../utils/interface';
import Link from 'next/link';

const About = () => {
	const router = useRouter();
	const [info, setInfo] = useState<userInfoProps>(null);
	useEffect(() => {
		if (router.isReady) {
			if (localStorage.getItem('Token')) {
				(async () => {
					setInfo(await authApi.getInfo(localStorage.getItem('userNum')));
				})();
			} else {
				alert('비회원에게 제공하지 않는 기능입니다.');
				router.push('/');
			}
		}
	}, [router.isReady]);
	return (
		<Layout>
			<div className="about-container">
				<Paper elevation={5}>
					{info ? (
						<>
							<p className="about-title">{info.name}님의 정보입니다.</p>
							<div className="about-info">
								<div className="about-money">
									<p>전화번호</p>
									<p>{info.phone}</p>
								</div>
								<div className="about-point">
									<p>보유 포인트</p>
									<p>{info.point} pt</p>
								</div>
								<div className="about-history">
									<p className="history-title">구매 내역</p>
									<ul className="history-list">
										{info.reservation_list.map((item) => (
											<li>
												<Link href={`/ticketInfo?${item.reservation_num}`}>
													{item.reservation_date.slice(0, 26)}
												</Link>
											</li>
										))}
									</ul>
								</div>
							</div>
						</>
					) : (
						<CircularProgress />
					)}
				</Paper>
			</div>
		</Layout>
	);
};

export default About;
