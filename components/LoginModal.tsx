import { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Modal, TextField, Button } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import { modalState } from '../utils/states';
import { loginProps } from '../utils/interface';

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

const LoginModal = () => {
	const classes = useStyles();
	const [open, setOpen] = useRecoilState(modalState);
	const [info, setInfo] = useState<loginProps>({ email: '', password: '' });
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<Modal open={open} onClose={handleClose}>
			<div className={classes.paper} id="modal-container">
				<h1>Login</h1>
				<TextField
					style={{ width: '300px' }}
					label="이메일"
					variant="outlined"
					onChange={(e) => {
						setInfo({ ...info, email: e.target.value });
					}}
				/>
				<TextField
					style={{ margin: '15px 0', width: '300px' }}
					label="비밀번호"
					variant="outlined"
					type="password"
					onChange={(e) => {
						setInfo({ ...info, password: e.target.value });
					}}
				/>
				<Button
					style={{ width: '300px', fontWeight: 'bold' }}
					variant="outlined"
					color="primary"
				>
					Login
				</Button>
			</div>
		</Modal>
	);
};

export default LoginModal;
