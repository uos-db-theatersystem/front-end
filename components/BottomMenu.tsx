import React from 'react';
import { Button } from '@material-ui/core';
import { Movie, EventNote, Fastfood } from '@material-ui/icons';
import Link from 'next/link';

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
			<Link href="/product">
				<Button>
					<Fastfood />
					&nbsp; 상품관
				</Button>
			</Link>
		</div>
	);
};

export default BottomMenu;
