import { useState } from 'react';
import { Layout } from '../../components/index';
import { productProps } from '../../utils/interface';
import { productsApi } from '../../utils/api';
import { TextField, Button, FormControl, InputLabel, Select } from '@material-ui/core';
const product = () => {
	const [info, setInfo] = useState<productProps>({
		product_type: '스낵',
		product_name: null,
		product_description: null,
		product_image_url: null,
		product_price: null,
	});
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setInfo({ ...info, [name]: value });
	};
	const handleClick = async () => {
		try {
			await productsApi.postProduct(info);
			alert('상품 등록이 완료됐습니다.');
		} catch (e) {
			alert('잘 못 입력된 정보입니다.');
		}
	};
	return (
		<Layout>
			<h1 id="movie-header">상품 등록</h1>
			<div id="movie-container" onChange={handleInput}>
				<TextField
					className="movie-input"
					name="product_name"
					label="상품 이름"
					variant="outlined"
				/>
				<TextField
					className="movie-input"
					name="product_description"
					label="상품 설명"
					variant="outlined"
				/>
				<FormControl variant="outlined" className="movie-input">
					<InputLabel htmlFor="age-native-simple">상품 분류</InputLabel>
					<Select
						native
						value={info.product_type}
						inputProps={{
							name: 'product_type',
						}}
					>
						<option value="스낵">스낵</option>
						<option value="음료">음료</option>
						<option value="콤보">콤보</option>
					</Select>
				</FormControl>
				<TextField
					className="movie-input"
					name="product_price"
					label="상품 가격"
					variant="outlined"
				/>
				<TextField
					className="movie-input"
					name="product_image_url"
					label="상품 이미지 주소"
					variant="outlined"
				/>
				<Button variant="contained" color="primary" onClick={handleClick}>
					추가하기
				</Button>
			</div>
		</Layout>
	);
};

export default product;
