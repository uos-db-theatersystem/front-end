import React from 'react';
import { Button } from '@material-ui/core';
import { Movie, EventNote } from '@material-ui/icons';

const BottomMenu = () => {
	return (
		<div id="bottom-container">
			<Button>
				<EventNote />
				&nbsp; 상영시간표
			</Button>
			<Button>
				<Movie />
				&nbsp; 박스오피스
			</Button>
		</div>
	);
};

export default BottomMenu;
