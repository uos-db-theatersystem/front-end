import { useState, useEffect } from 'react';
import { Layout, ProductMenu } from '../components/index';
import { productsApi } from '../utils/api';
import { productProps } from '../utils/interface';

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

	return (
		<Layout>
			<h1 id="product-header">상품관</h1>
			<div id="product-container">
				{products.map((product) => (
					<ProductMenu
						name={product.product_name}
						desc={product.product_description}
						url={product.product_image_url}
						price={product.product_price}
					/>
				))}
			</div>
		</Layout>
	);
};

export default product;
