import { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { employeeLoginProps } from '../../utils/interface';
import { employeesApi } from '../../utils/api';
import Router from 'next/router';
const login = () => {
	const [info, setInfo] = useState<employeeLoginProps>({ emp_id: '', emp_password: '' });

	const handleClick = async () => {
		if (info.emp_id === '' || info.emp_password === '') {
			alert('모든 정보를 입력해주세요.');
			return;
		}
		try {
			const { Token, is_admin } = await employeesApi.postLogin(info);
			if (Token) {
				localStorage.setItem('adminToken', Token);
				localStorage.setItem('admin', is_admin);
				if (is_admin === 'Y') {
					Router.push('/admin');
				} else {
					Router.push('/admin/attendance');
				}
			}
		} catch (e) {
			alert('입력하신 정보가 올바르지 않습니다.');
		}
	};
	return (
		<div id="modal-container">
			<h1>직원 로그인</h1>
			<TextField
				style={{ width: '300px' }}
				label="ID"
				variant="outlined"
				onChange={(e) => {
					setInfo({ ...info, emp_id: e.target.value });
				}}
			/>
			<TextField
				style={{ margin: '15px 0', width: '300px' }}
				label="Password"
				variant="outlined"
				type="password"
				onChange={(e) => {
					setInfo({ ...info, emp_password: e.target.value });
				}}
			/>
			<Button
				onClick={handleClick}
				style={{ width: '300px', fontWeight: 'bold' }}
				variant="outlined"
				color="primary"
			>
				Login
			</Button>
		</div>
	);
};

export default login;
