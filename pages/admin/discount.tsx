import { useState } from 'react';
import { Layout } from '../../components/index';
import { postDiscountProps } from '../../utils/interface';
import { discountApi } from '../../utils/api';
import { TextField, Button, FormControl, InputLabel, Select } from '@material-ui/core';
const discount = () => {
	const [info, setInfo] = useState<postDiscountProps>({
		type: '0000',
		name: null,
		percentage: 0,
		price: 0,
	});
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (name === 'percentage' || name === 'price') setInfo({ ...info, [name]: Number(value) });
		else setInfo({ ...info, [name]: value });
	};
	const handleClick = async () => {
		try {
			await discountApi.postDiscount(info);
			alert('할인 등록이 완료됐습니다.');
		} catch (e) {
			alert('잘 못 입력된 정보입니다.');
		}
	};
	return (
		<Layout>
			<h1 id="movie-header">할인 등록</h1>
			<div id="movie-container" onChange={handleInput}>
				<TextField
					className="movie-input"
					name="name"
					label="할인 이름"
					variant="outlined"
				/>
				<FormControl variant="outlined" className="movie-input">
					<InputLabel htmlFor="age-native-simple">할인 분류</InputLabel>
					<Select
						native
						value={info.type}
						inputProps={{
							name: 'type',
						}}
					>
						<option value="0000">비율 할인</option>
						<option value="0001">고정 할인</option>
					</Select>
				</FormControl>
				<TextField
					className="movie-input"
					name={info.type === '0000' ? 'percentage' : 'price'}
					label={info.type === '0000' ? '할인 비율' : '할인 가격'}
					variant="outlined"
				/>
				<Button variant="contained" color="primary" onClick={handleClick}>
					추가하기
				</Button>
			</div>
		</Layout>
	);
};

export default discount;
