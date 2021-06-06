import { useState, useRef } from 'react';
import { Layout } from '../../components/index';
import { Input, Button, Paper, CircularProgress } from '@material-ui/core';
import { profitApi } from '../../utils/api';
import { dateProps, wageProps } from '../../utils/interface';

const profit = () => {
	const fromRef = useRef<HTMLInputElement>();
	const toRef = useRef<HTMLInputElement>();
	const [sales, setSales] = useState<number>(0);
	const [wageInfos, setWageInfos] = useState<wageProps[]>([]);
	const [loading, setLoading] = useState<{ sales: boolean; wages: boolean }>({
		sales: false,
		wages: false,
	});
	const handleClick = () => {
		const [from_date, to_date] = [fromRef.current.value, toRef.current.value];
		if (!from_date || !to_date || to_date < from_date) {
			alert('올바른 입력 후 조회를 눌러주세요.');
			return;
		}
		const from = String(from_date).split('-');
		const to = String(to_date).split('-');
		setLoading({ wages: true, sales: true });
		updateWage({ from_date: from[0] + from[1] + from[2], to_date: to[0] + to[1] + to[2] });
		updateSales({
			from_date: String(from[0].slice(2) + from[1] + from[2]),
			to_date: to[0].slice(2) + to[1] + to[2],
		});
	};
	const updateWage = async (dates: dateProps) => {
		try {
			setWageInfos(await profitApi.getWage(dates));
		} catch (e) {
			alert('조회중 오류가 발생했습니다.');
		} finally {
			setLoading({ ...loading, wages: false });
		}
	};
	const updateSales = async (dates: dateProps) => {
		try {
			setSales((await profitApi.getSales(dates)).sales || 0);
		} catch (e) {
			alert('조회중 오류가 발생했습니다.');
		} finally {
			setLoading({ ...loading, sales: false });
		}
	};
	return (
		<Layout>
			<h1 className="profit-header">매출 조회</h1>
			<div>
				<Input inputRef={fromRef} type="date"></Input>
				<b>&nbsp;~&nbsp;</b>
				<Input inputRef={toRef} type="date"></Input>
				&nbsp;
				<Button
					variant="outlined"
					style={{ fontWeight: 'bold' }}
					color="primary"
					onClick={handleClick}
				>
					조회
				</Button>
			</div>
			<Paper id="profit-container" elevation={5}>
				<div id="profit-wage-container">
					<h3 className="profit-header">총 지불 임금</h3>
					{loading.wages ? (
						<CircularProgress />
					) : (
						<p id="profit-sales">
							{wageInfos.reduce((acc, cur) => acc + cur.wage, 0)}원
						</p>
					)}
					<h3 className="profit-header">지불 임금</h3>
					{loading.wages ? (
						<CircularProgress />
					) : (
						<ul>
							{wageInfos.map((info) => (
								<li style={{ fontSize: '20px' }}>
									{info.emp_name} : {info.wage}
								</li>
							))}
						</ul>
					)}
				</div>
				<div id="profit-sales-container">
					<h3 className="profit-header">티켓 매출</h3>
					{loading.sales ? <CircularProgress /> : <p id="profit-sales">{sales}원</p>}
					<h3 className="profit-header">순 이익</h3>
					{loading.sales || loading.wages ? (
						<CircularProgress />
					) : (
						<p id="profit-sales">
							{sales - wageInfos.reduce((acc, cur) => acc + cur.wage, 0)}원
						</p>
					)}
				</div>
			</Paper>
		</Layout>
	);
};

export default profit;
