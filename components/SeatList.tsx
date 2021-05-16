import { useState } from 'react';
import { ToggleButton } from '@material-ui/lab';

const SeatList = () => {
	const [selected, setSelected] = useState(false);
	const chList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
	const numList = [1, 2, 3, 4, -1, 5, 6, 7, 8, 9, 10, 11, -1, 12, 13, 14, 15];
	return (
		<div className="seatlist-container">
			<p className="seatlist-screen">screen</p>
			{chList.map((ch) => {
				return (
					<div className="seatlist-row">
						{numList.map((num) =>
							num === -1 ? (
								<b className="seatlist-alpha">{ch}</b>
							) : (
								<ToggleButton
									style={{
										color: 'black',
										borderColor: 'black',
										fontWeight: 'bold',
										width: '30px',
									}}
									size="small"
									selected={selected}
									data-pos={`${ch}${num}`}
									onChange={() => setSelected(!selected)}
								>
									{num}
								</ToggleButton>
							)
						)}
					</div>
				);
			})}
		</div>
	);
};

export default SeatList;
