import React, { useState } from 'react';
import { Layout } from '../../components/index';
import { TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core';
import { employeeProps } from '../../utils/interface';

const employee = () => {
	const [info, setInfo] = useState<employeeProps>({
		emp_grade: null,
		emp_id: null,
		emp_name: null,
		emp_phonenum: null,
		department_name: null,
		contract_hourly_wage: null,
		contract_salary: null,
		is_admin: 'N',
		emp_pw: null,
	});
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.name === 'is_admin') {
			setInfo({ ...info, is_admin: e.target.checked ? 'Y' : 'N' });
		} else {
			const { name, value } = e.target;
			setInfo({ ...info, [name]: value });
		}
	};
	const handleClick = async () => {};
	console.log(info);
	return (
		<Layout>
			<h1 id="movie-header">직원 등록</h1>
			<div id="movie-container" onChange={handleInput}>
				<TextField
					className="movie-input"
					name="emp_name"
					label="이름"
					variant="outlined"
				/>
				<TextField
					className="movie-input"
					name="emp_phonenum"
					label="전화번호"
					variant="outlined"
				/>
				<TextField
					className="movie-input"
					name="department_name"
					label="소속부서"
					variant="outlined"
				/>
				<TextField
					className="movie-input"
					name="emp_id"
					label="계정 아이디"
					variant="outlined"
				/>
				<TextField
					className="movie-input"
					name="emp_pw"
					label="비밀번호"
					variant="outlined"
					type="password"
				/>
				<TextField
					className="movie-input"
					name="emp_grade"
					label="소속부서"
					variant="outlined"
				/>
				<FormControlLabel
					control={<Checkbox name="is_admin" color="primary" />}
					label="Admin 권한 부여"
				/>
				<Button variant="contained" color="primary" onClick={handleClick}>
					추가하기
				</Button>
			</div>
		</Layout>
	);
};

export default employee;
