export interface movieListProps {
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

export interface movieProps {
	actor_names: string;
	director_name: string;
	distributor_name: string;
	genres: string[];
	grade: string;
	is_screening: string;
	movie_description: string;
	movie_name: string;
	movie_num: number;
	movie_poster_url: string;
	running_time: number;
}
export interface postMovieProps {
	actor_names: string;
	director_name: string;
	distributor_name: string;
	genres: string;
	is_screening: string;
	movie_description: string;
	movie_name: string;
	moviegrade_num: string;
	movie_poster_url: string;
	running_time: number;
}
export interface loginProps {
	email: string;
	password: string;
}
export interface signUpProps {
	customer_name: string;
	customer_phonenum: string;
	birth: string;
	email: string;
	password: string;
	user_confirm_password: string;
}
