import { useEffect, useState } from 'react';
import { Layout, EmployeeModal } from '../../components/index';
import { employeeProps } from '../../utils/interface';
import { employeesApi } from '../../utils/api';
import { List, ListItem, Divider, IconButton } from '@material-ui/core';
import { Edit, Close } from '@material-ui/icons';
const employees = () => {
	const [employees, setEmployees] = useState<employeeProps[]>([]);
	const [empId, setEmpId] = useState<string>();
	const [open, setOpen] = useState<boolean>(false);
	useEffect(() => {
		(async () => {
			try {
				setEmployees(await employeesApi.getEmployees());
			} catch (e) {
				throw new Error(e);
			}
		})();
	}, []);
	const handleClick = async (e: any) => {
		const { name, dataset } = e.target.closest('button');

		if (name === 'delete') {
			try {
				await employeesApi.deleteEmployees(dataset.id);
				setEmployees(employees.filter((employee) => employee.emp_id !== dataset.id));
			} catch (e) {
				throw new Error(e);
			}
		} else if (name === 'edit') {
			setEmpId(dataset.id);
			setOpen(true);
		}
	};
	const putEmployee = async (data: employeeProps) => {
		data.emp_id = empId;
		try {
			await employeesApi.putEmployee(data);
			alert('직원 수정이 완료됐습니다.');
			setOpen(false);
		} catch (e) {
			alert('직원 수정중 오류가 발생했습니다.');
		}
	};
	return (
		<Layout>
			<h1 style={{ textAlign: 'center' }}>직원 목록</h1>
			<List
				className="search-list"
				style={{ padding: '0 0' }}
				component="nav"
				onClick={handleClick}
			>
				{employees.map((employee) => (
					<div key={Number(employee.emp_phonenum)}>
						<ListItem>
							<p>{employee.emp_name}</p>
							<div style={{ marginLeft: 'auto' }}>
								<IconButton name="edit" data-id={employee.emp_id}>
									<Edit />
								</IconButton>
								<IconButton name="delete" data-id={employee.emp_id}>
									<Close />
								</IconButton>
							</div>
						</ListItem>
						<Divider />
					</div>
				))}
			</List>
			<EmployeeModal open={open} setOpen={setOpen} putEmployee={putEmployee} />
		</Layout>
	);
};

export default employees;
