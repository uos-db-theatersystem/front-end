import { productProps } from '../utils/interface';
import React from 'react';
import { Paper } from '@material-ui/core';

const ProductMenu = ({ desc, url, name, price }) => {
	return (
		<Paper elevation={5} style={{ width: '400px', height: '600px', marginBottom: '20px' }}>
			<img src={url} style={{ width: '400px', height: '400px' }} />
			<h2 style={{ textAlign: 'center' }}>{name}</h2>
			<h3 style={{ textAlign: 'center' }}>{desc}</h3>
			<h2 style={{ textAlign: 'center', color: 'blue' }}>{price}</h2>
		</Paper>
	);
};

export default ProductMenu;
