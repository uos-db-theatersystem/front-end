export interface movieProps {
	grade: string;
	is_screening: string | null;
	movie_description: string;
	movie_name: string;
	movie_num: number;
	movie_poster_url: string | null;
}

export interface movieThumbProps {
	movie_num: number;
	movie_poster_url: string | null;
	movie_description: string;
}
