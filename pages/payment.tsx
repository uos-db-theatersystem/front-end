import { useState, useEffect, ChangeEvent } from 'react';
import { Layout } from '../components/index';
import { authApi, reservationApi, discountApi } from '../utils/api';
import { paymentProps, userInfoProps, discountProps } from '../utils/interface';
import { useRouter } from 'next/router';
import {
	FormControl,
	Select,
	TextField,
	FormControlLabel,
	Checkbox,
	Paper,
	Button,
} from '@material-ui/core';
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
		dcnt_num: 10,
		sender_name: '',
		sender_accountnum: '',
		used_point: 0,
		card_comp_name: '',
		card_num: '',
	});
	const [userInfo, setUserInfo] = useState<userInfoProps>(null);
	const [discounts, setDiscounts] = useState<discountProps[]>([]);
	const [checked, setChecked] = useState<boolean>(false);
	useEffect(() => {
		if (router.isReady) {
			if (localStorage.getItem('Token')) {
				(async () => {
					setUserInfo(await authApi.getInfo(localStorage.getItem('userNum')));
					setDiscounts(await discountApi.getDiscounts());
				})();
			}
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
	const handleDiscount = (e) => {
		if (Number(e.target.value) === -1) {
			setPayment({ ...payment, dcnt_num: 4, dcnt_after_price: payment.standard_price });
			return;
		}
		const info = discounts.find((info) => info.discount_num === Number(e.target.value));

		const dcntPrice =
			info.discount_percentage === 0
				? info.discount_price
				: Math.floor(payment.standard_price * (info.discount_percentage / 100));
		setPayment({
			...payment,
			dcnt_num: Number(e.target.value),
			dcnt_after_price: payment.standard_price - dcntPrice,
			payment_price: payment.standard_price - dcntPrice - payment.used_point,
		});
	};
	const handlePoint = (e) => {
		const point = +e.target.value;
		if (!point || point <= 0 || point > userInfo.point || point > payment.dcnt_after_price) {
			setPayment({
				...payment,
				is_point_used: 'n',
				used_point: 0,
				payment_price: payment.dcnt_after_price,
			});
			e.target.value = 0;
		} else {
			setPayment({
				...payment,
				is_point_used: 'y',
				used_point: point,
				payment_price: payment.dcnt_after_price - point,
			});
			e.target.value = point;
		}
	};
	const handleClick = async () => {
		console.log(payment);

		try {
			await reservationApi.postPayment(payment);
			alert('성공적으로 예매가 완료되었습니다.');
			if (!localStorage.getItem('Token')) localStorage.removeItem('userNum');
			router.push('/about');
		} catch (e) {
			alert('예매 도중 오류가 발생했습니다.');
		}
	};

	return (
		<Layout>
			<Paper id="payment-container" elevation={5}>
				<h1 style={{ textAlign: 'center' }}>
					{router.isReady && router.query.name + ' 영화 결제'}
				</h1>
				<h1 style={{ textAlign: 'center' }}>기본 금액 : {payment.standard_price}원</h1>
				<div id="payment-form" onChange={handleInput}>
					{userInfo && (
						<>
							<h3>할인 목록</h3>
							<FormControl variant="outlined">
								<Select native onChange={handleDiscount}>
									<option value={10}>-</option>
									{discounts.map((info) => (
										<option key={info.discount_num} value={info.discount_num}>
											{info.discount_name} :{' '}
											{info.discount_price === 0
												? String(info.discount_percentage) + '%'
												: '-' + String(info.discount_price)}
										</option>
									))}
								</Select>
							</FormControl>
							<h3>내 포인트 : {userInfo.point}</h3>
							<FormControlLabel
								control={
									<Checkbox
										checked={checked}
										onChange={() => setChecked(!checked)}
										color="primary"
									/>
								}
								label="포인트 사용"
							/>
							{checked && (
								<TextField
									value={payment.used_point}
									label="적용 포인트"
									variant="outlined"
									type="number"
									onChange={handlePoint}
								/>
							)}
						</>
					)}
					<FormControl variant="outlined">
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
				<h1 style={{ textAlign: 'center' }}>최종 금액 : {payment.payment_price}</h1>
				<Button
					variant="contained"
					color="primary"
					style={{ fontWeight: 'bold', width: '100%' }}
					onClick={handleClick}
				>
					결제하기
				</Button>
			</Paper>
		</Layout>
	);
};

export default payment;
