import { useState, useEffect, ChangeEvent } from 'react';
import { Layout } from '../components/index';
import {} from '../utils/api';
import { paymentProps, userInfoProps } from '../utils/interface';
import { useRouter } from 'next/router';
import { FormControl, InputLabel, Select, TextField } from '@material-ui/core';
const payment = () => {
	const router = useRouter();
	const [payment, setPayment] = useState<paymentProps>({
		payment_type: '1234',
		reservation_num: null,
		standard_price: 0,
		payment_price: 0,
		dcnt_after_price: 0,
		is_point_used: 'n',
		is_payment_canceled: 'n',
		dcnt_num: 0,
		sender_name: '',
		sender_accountnum: '',
		used_point: 0,
		card_comp_name: '',
		card_num: '',
	});
	const [userInfo, setUserInfo] = useState<userInfoProps>();
	useEffect(() => {
		if (router.isReady) {
			setPayment({
				...payment,
				reservation_num: Number(router.query.reservation_num),
				standard_price: Number(router.query.price),
				payment_price: Number(router.query.price),
				dcnt_after_price: Number(router.query.price),
			});
		}
	}, [router.isReady]);
	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (!name) return;
		setPayment({ ...payment, [name]: value });
	};
	return (
		<Layout>
			<h1 style={{ textAlign: 'center' }}>
				{router.isReady && router.query.name + ' 영화 결제'}
			</h1>
			<h1 style={{ textAlign: 'center' }}>기본 금액 : {payment.standard_price}원</h1>
			<div id="payment-container" onChange={handleInput}>
				<FormControl variant="outlined" className="movie-input">
					<InputLabel>결제 방식</InputLabel>
					<Select
						native
						value={payment.payment_type}
						inputProps={{
							name: 'payment_type',
						}}
					>
						<option value="1234">카드 결제</option>
						<option value="1000">계좌 이체</option>
					</Select>
				</FormControl>
				{payment.payment_type === '1234' ? (
					<>
						<TextField label="카드사 명" name="card_comp_name" variant="outlined" />
						<TextField
							label="카드 번호"
							name="card_num"
							placeholder="1234123412341234"
							variant="outlined"
						/>
					</>
				) : (
					<>
						<TextField
							label="계좌 소유자"
							name="sender_name"
							placeholder="성명"
							variant="outlined"
						/>
						<TextField
							label="계좌 번호"
							name="sender_accountnum"
							placeholder="123456-123-123456"
							variant="outlined"
						/>
					</>
				)}
			</div>
		</Layout>
	);
};

export default payment;
