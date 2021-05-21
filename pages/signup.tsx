import { ChangeEvent, useState } from 'react';
import { Layout } from '../components/index';
import { Paper, TextField, Button } from '@material-ui/core';
import { signUpProps } from '../utils/interface';
import { authApi } from '../utils/api';
import Router from 'next/router';

const signup = () => {
	const [info, setInfo] = useState<signUpProps>({
		customer_name: '',
		customer_phonenum: '',
		birth: '',
		email: '',
		password: '',
		user_confirm_password: '',
	});
	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setInfo({ ...info, [name]: value });
	};
	const handleClick = async () => {
		for (let key in info) {
			if (info[key] === null || info[key] === '') {
				alert('정보를 모두 입력해주세요.');
				return;
			}
		}
		if (!/^[0-9]{11}$/.test(info.customer_phonenum)) {
			alert('전화번호를 양식에 맞게 입력해주세요.');
			return;
		}
		if (!/^[0-9]{6}$/.test(info.birth)) {
			alert('생년월일을 양식에 맞게 입력해주세요.');
			return;
		}
		try {
			await authApi.register(info);
			alert('회원가입이 완료되었습니다. 다시 로그인 해주세요.');
			Router.push('/');
		} catch (e) {
			throw new Error(e);
		}
	};
	return (
		<Layout>
			<Paper id="signup-container" elevation={10}>
				<h1 style={{ textAlign: 'center' }}>회원 가입</h1>
				<div id="signup-inputs" onChange={handleInput}>
					<TextField
						className="signup-input"
						name="customer_name"
						label="이름"
						variant="outlined"
					/>
					<TextField
						className="signup-input"
						name="customer_phonenum"
						label="전화번호"
						placeholder="01012341234"
						variant="outlined"
					/>
					<TextField
						className="signup-input"
						name="birth"
						label="생년월일"
						placeholder="910101"
						variant="outlined"
					/>
					<TextField
						className="signup-input"
						label="이메일"
						name="email"
						placeholder="sample@ex.com"
						variant="outlined"
					/>
					<TextField
						className="signup-input"
						name="password"
						label="비밀번호"
						variant="outlined"
					/>
					<TextField
						className="signup-input"
						name="user_confirm_password"
						label="비밀번호 확인"
						variant="outlined"
					/>
					<Button
						style={{ width: '50%', fontWeight: 'bold', marginTop: '10px' }}
						variant="outlined"
						color="primary"
						onClick={handleClick}
					>
						Submit
					</Button>
				</div>
			</Paper>
		</Layout>
	);
};

export default signup;
