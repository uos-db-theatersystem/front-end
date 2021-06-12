import { useState, ChangeEvent } from 'react';
import { Modal, TextField, IconButton } from '@material-ui/core';
import { Close, Edit } from '@material-ui/icons';
import { newScheduleProps } from '../utils/interface';
import { useStyles } from '../utils/functions';

const ScheduleModal = ({ open, setOpen, patchSchedule }) => {
	const classes = useStyles();
	const [info, setInfo] = useState<newScheduleProps>();
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (!name) return;
		setInfo({ ...info, [name]: value });
	};
	return (
		<Modal open={open} onClose={() => setOpen(false)}>
			<div className={classes.paper} id="modal-container" onChange={handleChange}>
				<h1>상영 정보 수정</h1>
				<TextField
					name="screening_date"
					style={{ width: '300px' }}
					label="상영일자"
					placeholder="20210101"
					variant="outlined"
				/>
				<TextField
					name="auditorium_num"
					style={{ margin: '15px 0', width: '300px' }}
					label="상영관"
					variant="outlined"
				/>

				<TextField
					name="screening_time"
					style={{ margin: '15px 0', width: '300px' }}
					label="상영시간"
					placeholder="1230"
					variant="outlined"
				/>
				<TextField
					name="ticket_price"
					style={{ width: '300px' }}
					label="티켓 가격"
					variant="outlined"
				/>

				<div>
					<IconButton name="edit" onClick={() => patchSchedule(info)}>
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

export default ScheduleModal;
