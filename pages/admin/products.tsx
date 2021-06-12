import { useState, useEffect } from 'react';
import { Layout, ProductModal } from '../../components/index';
import { productProps } from '../../utils/interface';
import { productsApi } from '../../utils/api';
import { List, ListItem, Divider, IconButton } from '@material-ui/core';
import { Edit, Close } from '@material-ui/icons';
const products = () => {
	const [open, setOpen] = useState<boolean>(false);
	const [products, setProducts] = useState<productProps[]>([]);
	const [productIdx, setProductIdx] = useState<number>(0);
	useEffect(() => {
		(async () => {
			try {
				setProducts(await productsApi.getProducts());
			} catch (e) {
				throw new Error(e);
			}
		})();
	}, []);
	const handleClick = async (e: any) => {
		const { name, dataset } = e.target.closest('button');

		if (name === 'delete') {
			try {
				await productsApi.deleteProduct(dataset.id);
				setProducts(
					products.filter((product) => product.product_num !== Number(dataset.id))
				);
			} catch (e) {
				throw new Error(e);
			}
		} else if (name === 'edit') {
			setProductIdx(Number(dataset.id));
			setOpen(true);
		}
	};
	const putProduct = async (data: productProps) => {
		data.product_num = productIdx;
		try {
			await productsApi.putProduct(data);
			alert('상품이 성공적으로 추가됐습니다.');
			setOpen(false);
		} catch (e) {
			alert('상품 수정중 오류가 발생했습니다.');
		}
	};

	return (
		<Layout>
			<h1 style={{ textAlign: 'center' }}>상품 목록</h1>
			<List
				className="search-list"
				style={{ padding: '0 0' }}
				component="nav"
				onClick={handleClick}
			>
				{products.map((product) => (
					<div key={product.product_num}>
						<ListItem>
							<div>
								<p style={{ margin: '0 0' }}>{product.product_name}</p>
								<b style={{ fontSize: '20px' }}>{product.product_description} </b>
								<b style={{ fontSize: '20px' }}>{product.product_price}원</b>
							</div>
							<div style={{ marginLeft: 'auto' }}>
								<IconButton name="edit" data-id={product.product_num}>
									<Edit />
								</IconButton>
								<IconButton name="delete" data-id={product.product_num}>
									<Close />
								</IconButton>
							</div>
						</ListItem>
						<Divider />
					</div>
				))}
			</List>
			<ProductModal open={open} setOpen={setOpen} putProduct={putProduct} />
		</Layout>
	);
};

export default products;
