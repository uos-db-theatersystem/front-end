import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Layout, SeatList } from '../components/index';
import { reservationApi } from '../utils/api';
const reservation = () => {
	const router = useRouter();

	useEffect(() => {
		if (!router.isReady) return;
		(async () => {
			try {
				const data = await reservationApi.getSeatInfo({
					schedule_num: router.query.schedule_num,
					auditorium_num: router.query.auditorium_num,
				});
				console.log(data);
			} catch (e) {
				throw new Error(e);
			}
		})();
	}, [router.isReady]);
	return (
		<Layout>
			<SeatList />
		</Layout>
	);
};

export default reservation;
