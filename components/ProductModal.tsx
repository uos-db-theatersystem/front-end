import { useState, ChangeEvent } from 'react';
import { Modal, TextField, IconButton, FormControl, InputLabel, Select } from '@material-ui/core';
import { Close, Edit } from '@material-ui/icons';
import { productProps } from '../utils/interface';
import { useStyles } from '../utils/functions';

const ProductModal = ({ open, setOpen, putProduct }) => {
	const classes = useStyles();
	const [info, setInfo] = useState<productProps>({
		product_description: '',
		product_image_url: '',
		product_name: '',
		product_price: 0,
		product_type: '음료',
	});
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (!name) return;
		setInfo({ ...info, [name]: value });
	};
	return (
		<Modal open={open} onClose={() => setOpen(false)}>
			<div className={classes.paper} id="modal-container" onChange={handleChange}>
				<h1>상품 정보 수정</h1>
				<TextField
					name="product_name"
					style={{ width: '300px' }}
					label="상품 이름"
					variant="outlined"
				/>
				<TextField
					name="product_description"
					style={{ margin: '15px 0', width: '300px' }}
					label="상품 설명"
					placeholder="ex: 판매"
					variant="outlined"
				/>
				<FormControl variant="outlined" className="movie-input">
					<InputLabel>상품 유형</InputLabel>
					<Select
						native
						style={{ width: '300px' }}
						value={info.product_type}
						inputProps={{
							name: 'product_type',
						}}
					>
						<option value="음료">음료</option>
						<option value="스낵">스낵</option>
						<option value="콤보">콤보</option>
					</Select>
				</FormControl>
				<TextField
					name="product_price"
					style={{ margin: '15px 0', width: '300px' }}
					label="상품 가격"
					variant="outlined"
				/>
				<TextField
					name="product_image_url"
					style={{ width: '300px' }}
					label="상품 이미지 주소"
					variant="outlined"
				/>

				<div>
					<IconButton name="edit" onClick={() => putProduct(info)}>
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

export default ProductModal;
