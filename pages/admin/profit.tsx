import React from 'react';
import { Layout } from '../../components/index';
import { Input, Button, Paper } from '@material-ui/core';
const profit = () => {
	return (
		<Layout>
			<h1 id="profit-header">매출 조회</h1>
			<div>
				<Input type="date"></Input>
				<b>&nbsp;~&nbsp;</b>
				<Input type="date"></Input>
				&nbsp;
				<Button variant="outlined" style={{ fontWeight: 'bold' }} color="primary">
					조회
				</Button>
			</div>
			<Paper id="profit-container" elevation={5}>
				<div>d</div>
				<div>s</div>
			</Paper>
		</Layout>
	);
};

export default profit;
