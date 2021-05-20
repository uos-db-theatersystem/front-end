import React from 'react';
import Link from 'next/link';
import { movieThumbProps } from '../utils/interface';

const MovieThumb = ({ movie_num, movie_poster_url, movie_description }: movieThumbProps) => {
	return (
		<div className="movie-thumb">
			<Link href="/detail/[id]" as={`/detail/${movie_num}`}>
				<div>
					<img src={movie_poster_url} />
					<div className="thumb-info">
						<p>{movie_description}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default MovieThumb;
