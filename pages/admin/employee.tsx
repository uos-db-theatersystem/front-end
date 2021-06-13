import React, { useState } from 'react';
import { Layout } from '../../components/index';
import { employeesApi } from '../../utils/api';
import {
	TextField,
	Button,
	Checkbox,
	FormControlLabel,
	FormControl,
	InputLabel,
	Select,
} from '@material-ui/core';
import { employeeProps } from '../../utils/interface';

const employee = () => {
	const [info, setInfo] = useState<employeeProps>({
		emp_grade: '정직원',
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
		} else if (e.target.name === 'emp_grade') {
			const { name, value } = e.target;
			setInfo({ ...info, [name]: value });
		} else {
			const { name, value } = e.target;
			setInfo({ ...info, [name]: value });
		}
	};
	
	const handleClick = async () => {
		const postInfo=info;
		if (info.emp_grade === '정직원') {
			postInfo.contract_salary=Number(postInfo.contract_salary)
			postInfo.contract_hourly_wage=null
		} else {
			postInfo.contract_hourly_wage=Number(postInfo.contract_hourly_wage)
			postInfo.contract_salary=null
		}
		
		try {
			await employeesApi.postEmployee(postInfo);
			alert('회원 등록이 완료됐습니다.');
		} catch (e) {
			alert('정보가 이미 존재하거나 잘 못 입력된 정보입니다.');
		}
	};
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
				<FormControl variant="outlined" className="movie-input">
					<InputLabel htmlFor="age-native-simple">직원 분류</InputLabel>
					<Select
						native
						value={info.emp_grade}
						inputProps={{
							name: 'emp_grade',
						}}
					>
						<option value="정직원">정직원</option>
						<option value="파트 타임 직원">파트 타임 직원</option>
					</Select>
				</FormControl>
				<TextField
					className="movie-input"
					name={info.emp_grade === '정직원' ? 'contract_salary' : 'contract_hourly_wage'}
					label="월급/시급"
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
					name="department_name"
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
