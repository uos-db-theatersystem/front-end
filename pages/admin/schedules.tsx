import { useEffect, useState } from 'react';
import { Layout } from '../../components/index';
import { schedulesProps } from '../../utils/interface';
import { schedulesApi } from '../../utils/api';
import { List, ListItem, Divider, IconButton } from '@material-ui/core';
import { Edit, Close } from '@material-ui/icons';

const schedules = () => {
	const [schedules, setSchedules] = useState<schedulesProps[]>([]);
	useEffect(() => {
		(async () => {
			try {
				setSchedules(await schedulesApi.getSchedules());
			} catch (e) {
				throw new Error(e);
			}
		})();
	}, []);
	const handleClick = async (e: any) => {};

	return (
		<Layout>
			<h1 style={{ textAlign: 'center' }}>상영 목록</h1>
			<List
				className="search-list"
				style={{ padding: '0 0' }}
				component="nav"
				onClick={handleClick}
			>
				{schedules.map((schedule) => (
					<div key={schedule.screeningschedule_num}>
						<ListItem>
							<div>
								<p style={{ margin: '0 0' }}>{schedule.movie_name}</p>
								<b style={{ fontSize: '20px' }}>{schedule.auditorium_num}관 </b>
								<b style={{ fontSize: '20px' }}>
									일자:{schedule.screening_date}|시간:{schedule.screening_time}
								</b>
							</div>
							<div style={{ marginLeft: 'auto' }}>
								<IconButton name="edit" data-id={schedule.screeningschedule_num}>
									<Edit />
								</IconButton>
								<IconButton name="delete" data-id={schedule.screeningschedule_num}>
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

export default schedules;
