import Layout from '../components/Layout';
import Link from 'next/link';
import { Paper } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import { nameState } from '../utils/states';
import React from 'react';

const About = () => {
	const [name, setNameState] = useRecoilState(nameState);

	const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNameState(e.target.value);
	};

	return (
		<Layout>
			<div className="about-container">
				<Paper elevation={5}>
					<p className="about-title">김현규님의 정보입니다.</p>
					<div className="about-info">
						<div className="about-money">
							<p>총 결제금액</p>
							<p>20000 원</p>
						</div>
						<div className="about-point">
							<p>보유 포인트</p>
							<p>10000 pt</p>
						</div>
						<div className="about-history">
							<p className="history-title">구매 내역</p>
							<ul className="history-list">
								<li>고질라 vs 콩 2020.20.20</li>
								<li>기생충 2020.20.02</li>
								<li>현구 2020.02.02</li>
							</ul>
						</div>
					</div>
				</Paper>
			</div>
		</Layout>
	);
};

export default About;
