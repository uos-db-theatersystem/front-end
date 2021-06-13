import { useEffect, useState } from 'react';
import { Layout, ScheduleModal } from '../../components/index';
import { newScheduleProps, schedulesProps } from '../../utils/interface';
import { schedulesApi } from '../../utils/api';
import { List, ListItem, Divider, IconButton } from '@material-ui/core';
import { Edit, Close } from '@material-ui/icons';

const schedules = () => {
	const [schedules, setSchedules] = useState<schedulesProps[]>([]);
	const [scheduleIdx, setScheduleIdx] = useState<number>();
	const [movieIdx, setMovieIdx] = useState<number>();
	const [open, setOpen] = useState<boolean>(false);
	useEffect(() => {
		(async () => {
			try {
				setSchedules(await schedulesApi.getSchedules());
			} catch (e) {
				throw new Error(e);
			}
		})();
	}, []);
	const handleClick = async (e: any) => {
		const { name, dataset } = e.target.closest('button');

		if (name === 'delete') {
			try {
				await schedulesApi.deleteSchedule(dataset.id);
				setSchedules(
					schedules.filter(
						(schedule) => schedule.screeningschedule_num !== Number(dataset.id)
					)
				);
			} catch (e) {
				throw new Error(e);
			}
		} else if (name === 'edit') {
			setScheduleIdx(Number(dataset.id));
			setMovieIdx(Number(dataset.movieNum));
			setOpen(true);
		}
	};
	const patchSchedule = async (data: newScheduleProps) => {
		data.movie_num = movieIdx;
		try {
			await schedulesApi.patchSchedule(data, scheduleIdx);
			alert('일정이 성공적으로 수정됐습니다.');
			setOpen(false);
		} catch (e) {
			alert('일정 수정중 오류가 발생했습니다.');
		}
	};

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
								<b style={{ margin: '0 0' }}>{schedule.movie_name}</b>
								<p style={{ fontSize: '20px' }}>{schedule.auditorium_num}관 </p>
								<b style={{ fontSize: '20px' }}>
									일자:{schedule.screening_date} | 시간:
									{schedule.screening_time < 1000
										? '0' + String(schedule.screening_time)
										: schedule.screening_time}
								</b>
							</div>
							<div style={{ marginLeft: 'auto' }}>
								<IconButton
									name="edit"
									data-id={schedule.screeningschedule_num}
									data-movie-num={schedule.movie_num}
								>
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
			<ScheduleModal open={open} setOpen={setOpen} patchSchedule={patchSchedule} />
		</Layout>
	);
};

export default schedules;
