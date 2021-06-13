import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { schedulesProps } from '../utils/interface';
export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		paper: {
			position: 'absolute',
			width: '600px',
			backgroundColor: theme.palette.background.paper,
			boxShadow: theme.shadows[5],
			padding: theme.spacing(2, 4, 3),
			top: '50%',
			left: '50%',
			transform: 'translate(-50%,-50%)',
		},
	})
);
export const getOrderedSchd = (schedules: schedulesProps[]): schedulesProps[][] => {
	const orderedSchd: schedulesProps[][] = [];
	for (let i = 0; i < 30; i++) {
		orderedSchd.push([]);
	}
	schedules.forEach((schedule) => {
		let str = String(schedule.screening_date);
		str = str.slice(0, 4) + '-' + str.slice(4, 6) + '-' + str.slice(6);
		const idx = Math.ceil(
			(new Date(str).getTime() - new Date().getTime()) / (1000 * 3600 * 24)
		);
		if (idx >= 0 && idx < 30) {
			orderedSchd[idx].push(schedule);
		}
	});
	return orderedSchd.map((schds) => schds.sort((a, b) => a.screening_time - b.screening_time));
};
export const getSchedules = () => {
	const days = ['일', '월', '화', '수', '목', '금', '토'];
	const [day, month, date] = [[], [], []];
	for (let i = 0; i < 30; i++) {
		const today = new Date();
		today.setDate(today.getDate() + i);
		day.push(days[today.getDay()]);
		month.push(today.getMonth() + 1);
		date.push(today.getDate());
	}
	return [day, month, date];
};
