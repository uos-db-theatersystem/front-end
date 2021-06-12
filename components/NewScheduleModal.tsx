import { useState, ChangeEvent } from 'react';
import { Modal, TextField, IconButton } from '@material-ui/core';
import { Close, Edit } from '@material-ui/icons';
import { newScheduleProps } from '../utils/interface';
import { useStyles } from '../utils/functions';

const NewScheduleModal = ({ open, setOpen, addSchedule }) => {
	const classes = useStyles();
	const [info, setInfo] = useState<newScheduleProps>({
		auditorium_num: null,
		screening_time: null,
		ticket_price: null,
		screening_date: null,
	});
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (!name) return;
		setInfo({ ...info, [name]: Number(value) });
	};
	return (
		<Modal open={open} onClose={() => setOpen(false)}>
			<div className={classes.paper} id="modal-container" onChange={handleChange}>
				<h1>상영 일정 추가</h1>
				<TextField
					name="screening_date"
					style={{ width: '300px' }}
					label="상영 일자"
					placeholder="ex: 20210101"
					variant="outlined"
				/>
				<TextField
					name="auditorium_num"
					style={{ margin: '15px 0', width: '300px' }}
					label="상영관 번호"
					placeholder="ex: 1"
					variant="outlined"
				/>
				<TextField
					name="screening_time"
					style={{ margin: '15px 0', width: '300px' }}
					label="상영 시간"
					placeholder="ex: 1230"
					variant="outlined"
				/>
				<TextField
					name="ticket_price"
					style={{ margin: '15px 0', width: '300px' }}
					label="티켓 가격"
					placeholder="ex: 10000"
					variant="outlined"
				/>
				<div>
					<IconButton name="edit" onClick={() => addSchedule(info)}>
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

export default NewScheduleModal;
