import { useState, useEffect } from 'react';
import { ToggleButton } from '@material-ui/lab';
import { useRouter } from 'next/router';
import { reservationApi } from '../utils/api';
import { CircularProgress } from '@material-ui/core';

interface selectsProps {
	selects: number[];
	setSelects: React.Dispatch<React.SetStateAction<number[]>>;
}

const SeatList = ({ selects, setSelects }: selectsProps) => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [data, setData] = useState<number[][]>();
	const chList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
	const numList = [1, 2, 3, 4, -1, 5, 6, 7, 8, 9, 10, 11, -1, 12, 13, 14, 15];
	useEffect(() => {
		if (!router.isReady) return;
		(async () => {
			try {
				setData(
					await reservationApi.getSeatInfo({
						schedule_num: router.query.schedule_num,
						auditorium_num: router.query.auditorium_num,
					})
				);
				setIsLoading(false);
			} catch (e) {
				throw new Error(e);
			}
		})();
	}, [router.isReady]);
	const handleClick = (e) => {
		const { col, row } = e.target.closest('button').dataset;
		const num = data[row][col - 1];
		const arr = selects.filter((item) => item !== num);
		arr.length === selects.length ? setSelects(selects.concat(num)) : setSelects(arr);
	};

	return isLoading ? (
		<CircularProgress />
	) : (
		<div className="seatlist-container">
			<p className="seatlist-screen">screen</p>
			{chList.map((ch, rowIdx) => (
				<div className="seatlist-row">
					{numList.map((num, colIdx) =>
						num === -1 ? (
							<b className="seatlist-alpha" key={Number(`${rowIdx}${colIdx}`)}>
								{ch}
							</b>
						) : data[rowIdx][num - 1] === -1 ? (
							<ToggleButton
								style={{
									color: 'black',
									borderColor: 'black',
									fontWeight: 'bold',
									width: '30px',
								}}
								disabled={true}
								size="small"
								selected={true}
							>
								X
							</ToggleButton>
						) : (
							<ToggleButton
								key={Number(`${rowIdx}${colIdx}`)}
								style={{
									color: 'black',
									borderColor: 'black',
									fontWeight: 'bold',
									width: '30px',
								}}
								size="small"
								selected={selects.includes(data[rowIdx][num - 1])}
								data-col={num}
								data-row={rowIdx}
								onChange={handleClick}
							>
								{num}
							</ToggleButton>
						)
					)}
				</div>
			))}
		</div>
	);
};

export default SeatList;
