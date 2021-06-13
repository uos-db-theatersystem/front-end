import { useState, useEffect } from 'react';
import { Layout } from '../components/index';
import { Paper, CircularProgress } from '@material-ui/core';
import { useRouter } from 'next/router';
import { reservationInfo } from '../utils/interface';
import { reservationApi } from '../utils/api';
const chList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
const ticketInfo = () => {
	const router = useRouter();
	const [info, setInfo] = useState<reservationInfo>(null);
	useEffect(() => {
		if (router.isReady) {
			(async () => {
				setInfo(await reservationApi.getReservationInfo(String(router.query.id)));
			})();
		}
	}, [router.isReady]);
	return (
		<Layout>
			<Paper id="ticket-container" elevation={5}>
				{info ? (
					<>
						<div id="ticket-left">
							<div id="ticket-seats">
								<h3>&nbsp;예매 좌석</h3>
								<ul>
									{info.seat_num.map((seat) => (
										<li>
											{chList[seat.row]}행 {seat.col}열
										</li>
									))}
								</ul>
							</div>
						</div>
						<div id="ticket-right">
							<div id="ticket-main">
								<h2>{info.movie_name}</h2>
								<h3>{info.screening_date}</h3>
								<ul>
									<li>상영{info.auditorium_num}관</li>
									{info.screening_time < 1000 ? (
										<li>
											{'0' + String(info.screening_time).slice(0, 1)}시
											{String(info.screening_time).slice(1)}분
										</li>
									) : (
										<li>
											{String(info.screening_time).slice(0, 2)}시
											{String(info.screening_time).slice(2)}분
										</li>
									)}

									<li>상영시간 : {info.running_time}분</li>
								</ul>
							</div>
						</div>
					</>
				) : (
					<CircularProgress />
				)}
			</Paper>
		</Layout>
	);
};

export default ticketInfo;
