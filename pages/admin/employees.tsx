import { useEffect, useState } from 'react';
import { Layout } from '../../components/index';
import { employeeProps } from '../../utils/interface';
import { employeesApi } from '../../utils/api';
import { List, ListItem, Divider, IconButton } from '@material-ui/core';
import { Edit, Close } from '@material-ui/icons';
const employees = () => {
	const [employees, setEmployees] = useState<employeeProps[]>([]);
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
		</Layout>
	);
};

export default employees;
