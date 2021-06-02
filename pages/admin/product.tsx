import { useState, useEffect } from 'react';
import { Layout } from '../../components/index';
import { productProps } from '../../utils/interface';
import { productsApi } from '../../utils/api';
import { List, ListItem, Divider, IconButton } from '@material-ui/core';
import { Edit, Close } from '@material-ui/icons';
const product = () => {
	const [products, setProducts] = useState<productProps[]>([]);
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
		</Layout>
	);
};

export default product;
