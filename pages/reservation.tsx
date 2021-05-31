import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Layout, SeatList } from '../components/index';
import { Button } from '@material-ui/core';
const reservation = () => {
	const router = useRouter();
	const [selects, setSelects] = useState<number[]>([]);
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
					<Button variant="contained" color="primary" disabled={selects.length === 0}>
						결제하기
					</Button>
				</div>
			</div>
		</Layout>
	);
};

export default reservation;
