import React from 'react';
import { Layout } from '../../components/index';
import { TextField, Input, Button } from '@material-ui/core';
const profit = () => {
	return (
		<Layout>
			<h1 id="profit-header">매출 조회</h1>
			<div>
				<Input type="month"></Input>
				<b>&nbsp;~&nbsp;</b>
				<Input type="month"></Input>
				&nbsp;
				<Button variant="outlined" style={{ fontWeight: 'bold' }} color="primary">
					조회
				</Button>
			</div>
		</Layout>
	);
};

export default profit;
