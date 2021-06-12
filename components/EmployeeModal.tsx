import { useState, ChangeEvent } from 'react';
import { Modal, TextField, IconButton, FormControl, InputLabel, Select } from '@material-ui/core';
import { Close, Edit } from '@material-ui/icons';
import { employeeProps } from '../utils/interface';
import { useStyles } from '../utils/functions';

const EmployeeModal = ({ open, setOpen, putEmployee }) => {
	const classes = useStyles();
	const [info, setInfo] = useState<employeeProps>({
		emp_grade: '파트 타임 직원',
		emp_name: '',
		emp_phonenum: '',
		emp_id: '',
		department_name: '',
		is_admin: 'N',
		contract_hourly_wage: 0,
		contract_salary: 0,
	});
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (!name) return;
		setInfo({ ...info, [name]: value });
	};
	return (
		<Modal open={open} onClose={() => setOpen(false)}>
			<div className={classes.paper} id="modal-container" onChange={handleChange}>
				<h1>직원 정보 수정</h1>
				<TextField
					name="emp_name"
					style={{ marginBottom: '15px', width: '300px' }}
					label="직원 이름"
					variant="outlined"
				/>
				<TextField
					name="department_name"
					style={{ width: '300px' }}
					label="부서 이름"
					placeholder="ex: 판매"
					variant="outlined"
				/>
				<FormControl variant="outlined" className="movie-input">
					<InputLabel>상영 여부</InputLabel>
					<Select
						native
						style={{ margin: '15px 0', width: '300px' }}
						value={info.emp_grade}
						inputProps={{
							name: 'emp_grade',
						}}
					>
						<option value="파트 타임 직원">파트 타임 직원</option>
						<option value="정직원">정직원</option>
					</Select>
				</FormControl>
				<TextField
					name="emp_phonenum"
					style={{ width: '300px' }}
					label="전화 번호"
					placeholder="ex: 01012345678"
					variant="outlined"
				/>
				<TextField
					name={
						info.emp_grade === '파트 타임 직원'
							? 'contract_hourly_wage'
							: 'contract_salary'
					}
					style={{ margin: '15px 0', width: '300px' }}
					label="계약 급여/시급"
					variant="outlined"
				/>
				<FormControl variant="outlined" className="movie-input">
					<InputLabel>관리자 여부</InputLabel>
					<Select
						style={{ width: '300px' }}
						native
						value={info.is_admin}
						inputProps={{
							name: 'is_admin',
						}}
					>
						<option value="N">N</option>
						<option value="Y">Y</option>
					</Select>
				</FormControl>
				<div>
					<IconButton name="edit" onClick={() => putEmployee(info)}>
						<Edit />
					</IconButton>
					<IconButton name="delete" onClick={() => setOpen(false)}>
						<Close />
					</IconButton>
				</div>
			</div>
		</Modal>
	);
};

export default EmployeeModal;
