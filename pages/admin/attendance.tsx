import React from 'react';
import { Button } from '@material-ui/core';
import { employeesApi } from '../../utils/api';
import Router from 'next/router';
const attendance = () => {
	const handleAttend = async () => {
		try {
			await employeesApi.postAttend(String(Router.query.id));
			alert('출근 등록이 완료됐습니다.');
		} catch (e) {
			alert('출근 등록중 오류가 발생했습니다.');
		}
	};
	const handleLeave = () => {
		try {
			employeesApi.leaveAttend(String(Router.query.id));
			alert('퇴근 등록이 완료됐습니다.');
		} catch (e) {
			alert('퇴근 등록중 오류가 발생했습니다.');
		}
	};
	const handleLogout = () => {
		localStorage.removeItem('adminToken');
		localStorage.removeItem('admin');
		Router.push('/');
	};

	return (
		<>
			<h1 style={{ textAlign: 'center', fontSize: '40px' }}>출퇴근 기록</h1>
			<div
				style={{
					marginTop: '200px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				<Button
					style={{ width: '300px', fontWeight: 'bold', fontSize: '30px' }}
					variant="outlined"
					color="primary"
					size="large"
					onClick={handleAttend}
				>
					출근
				</Button>
				<Button
					style={{ width: '300px', fontWeight: 'bold', fontSize: '30px', margin: '15px' }}
					variant="outlined"
					color="primary"
					size="large"
					onClick={handleLeave}
				>
					퇴근
				</Button>
				<Button
					style={{ width: '300px', fontWeight: 'bold', fontSize: '30px' }}
					variant="contained"
					color="secondary"
					size="large"
					onClick={handleLogout}
				>
					로그아웃
				</Button>
			</div>
		</>
	);
};

export default attendance;
