import { useState, useRef, MutableRefObject } from 'react';
import { Layout } from '../components/index';
import { authApi } from '../utils/api';
import { nonInfoProps } from '../utils/interface';
import { Paper, Button, TextField } from '@material-ui/core';
import Link from 'next/link';
const noninfo = () => {
	const [info, setInfo] = useState<nonInfoProps>(null);
	const ref: MutableRefObject<HTMLInputElement> = useRef();
	const handleClick = async () => {
		if (ref.current.value === '') {
			alert('전화번호를 입력해주세요.');
			return;
		}
		setInfo(await authApi.getNonInfo(ref.current.value));
	};

	return (
		<Layout>
			<div className="about-container">
				<div id="non-input">
					<TextField inputProps={{ ref: ref }} label="전화번호"></TextField>
					<Button onClick={handleClick} variant="contained" color="primary">
						조회
					</Button>
				</div>
				<Paper elevation={5}>
					{info && (
						<>
							<p className="about-title">{info.name}님의 정보입니다.</p>
							<div className="non-about-info">
								<div className="about-money">
									<p>전화번호</p>
									<p>{info.phone}</p>
								</div>
								<div className="about-history">
									<p className="history-title">구매 내역</p>
									<ul className="history-list">
										{info.reservation_list.map((item) => (
											<li>
												<Link
													href={`/ticketInfo?id=${item.reservation_num}`}
												>
													{item.reservation_date.slice(0, 26)}
												</Link>
											</li>
										))}
									</ul>
								</div>
							</div>
						</>
					)}
				</Paper>
			</div>
		</Layout>
	);
};

export default noninfo;
