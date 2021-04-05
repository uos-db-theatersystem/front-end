import React, { useState } from 'react';
import Layout from '../components/Layout';
import { ToggleButton } from '@material-ui/lab';

const reservation = () => {
	const [selected, setSelected] = useState(false);

	return (
		<Layout>
			<ToggleButton
				size="small"
				selected={selected}
				onChange={() => setSelected(!selected)}
			>
				A1
			</ToggleButton>
			<ToggleButton
				size="small"
				selected={selected}
				onChange={() => setSelected(!selected)}
			>
				A2
			</ToggleButton>
		</Layout>
	);
};

export default reservation;
