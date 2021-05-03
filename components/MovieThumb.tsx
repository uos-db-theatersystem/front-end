import React from 'react';
import { Button } from '@material-ui/core';
import Link from 'next/link';

const MovieThumb = () => {
	return (
		<div className="movie-thumb">
			<Link href="/detail">
				<div>
					<img src="https://img.megabox.co.kr/SharedImg/2021/03/11/ZW5kivGPf9YF7Yoxz0N8EeV8VV89Sf0x_420.jpg" />
					<div className="thumb-info">
						<p>영화 내용1232132132131232132132132132132131</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default MovieThumb;
