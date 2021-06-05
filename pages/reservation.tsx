import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Layout, SeatList, NonLoginModal } from '../components/index';
import { Button } from '@material-ui/core';
import { reservationApi } from '../utils/api';
import { useRecoilState } from 'recoil';
import { modalState } from '../utils/states';

const reservation = () => {
	const router = useRouter();
	const [selects, setSelects] = useState<number[]>([]);
	const [open, setOpen] = useRecoilState(modalState);
	const handleClick = async () => {
		const userNum = localStorage.getItem('userNum');
		if (!userNum) {
			setOpen({ ...open, nonLogin: true });
			return;
		}
		const { reservation_num } = await reservationApi.postReservation({
			schedule_num: Number(router.query.schedule_num),
			customer_num: Number(userNum),
			seat_num: selects,
		});
		router.push({
			pathname: '/payment',
			query: {
				reservation_num,
			},
		});
	};

	return (
		<Layout>
			<h1 style={{ textAlign: 'center' }}>
				{router.isReady && router.query.name + ' 좌석 정보'}
			</h1>
			<div id="reservation-container">
				<SeatList selects={selects} setSelects={setSelects} />
				<div id="reservation-side">
					<h2 style={{ textAlign: 'center' }}>선택된 좌석 수</h2>
					<h2 style={{ textAlign: 'center' }}>{selects.length}</h2>
					<Button
						variant="contained"
						color="primary"
						disabled={selects.length === 0}
						onClick={handleClick}
					>
						결제하기
					</Button>
				</div>
			</div>
			<NonLoginModal />
		</Layout>
	);
};

export default reservation;
