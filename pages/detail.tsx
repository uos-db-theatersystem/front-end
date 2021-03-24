import React from 'react';
import Layout from '../components/Layout';
import { Button } from '@material-ui/core';

// 영화 세부 정보
const detail = () => {
	return (
		<Layout>
			<div id="detail-container">
				<img
					id="detail-img"
					src="https://img.megabox.co.kr/SharedImg/2021/03/11/ZW5kivGPf9YF7Yoxz0N8EeV8VV89Sf0x_420.jpg"
				/>
				<div id="detail-head">
					<b>고질라 vs 콩</b>
					<Button variant="outlined" color="primary">
						예매하기
					</Button>
				</div>
			</div>
		</Layout>
	);
};

export default detail;
