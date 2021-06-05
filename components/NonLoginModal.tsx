import { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Modal, TextField, Button } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import { modalState } from '../utils/states';
import { nonLoginProps } from '../utils/interface';
import { authApi } from '../utils/api';

const useStyles = makeStyles((theme: Theme) =>
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

const NonLoginModal = () => {
	const classes = useStyles();
	const [open, setOpen] = useRecoilState(modalState);
	const [info, setInfo] = useState<nonLoginProps>({ name: '', phone_number: '' });

	const handleClick = async () => {
		if (info.name === '' || info.phone_number === '') {
			alert('모든 정보를 입력해주세요.');
			return;
		}
		try {
			const { user_num } = await authApi.nonLogin(info);
			localStorage.setItem('userNum', String(user_num));
			setOpen({ ...open, nonLogin: false });
			alert('다시 결제 버튼을 눌러주세요');
		} catch (e) {
			alert('비회원 등록중 오류가 발생했습니다.');
		}
	};
	return (
		<Modal open={open.nonLogin} onClose={() => setOpen({ ...open, nonLogin: false })}>
			<div className={classes.paper} id="modal-container">
				<h1>비회원 예매</h1>
				<TextField
					style={{ width: '300px' }}
					label="이름"
					variant="outlined"
					onChange={(e) => {
						setInfo({ ...info, name: e.target.value });
					}}
				/>
				<TextField
					style={{ margin: '15px 0', width: '300px' }}
					label="전화번호"
					variant="outlined"
					onChange={(e) => {
						setInfo({ ...info, phone_number: e.target.value });
					}}
				/>
				<Button
					onClick={handleClick}
					style={{ width: '300px', fontWeight: 'bold' }}
					variant="outlined"
					color="primary"
				>
					예매하기
				</Button>
			</div>
		</Modal>
	);
};

export default NonLoginModal;
