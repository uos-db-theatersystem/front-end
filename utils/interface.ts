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
export interface userProps {
	Token: string;
	user_num: number;
}
export interface signUpProps {
	customer_name: string;
	customer_phonenum: string;
	birth: string;
	email: string;
	password: string;
	user_confirm_password: string;
}
export interface schedulesProps {
	auditorium_num: number;
	movie_grade: string;
	movie_name: string;
	movie_num: number;
	running_time: number;
	screening_cnt: number;
	screening_date: number;
	screening_time: number;
	screeningschedule_num: number;
}
export interface productProps {
	product_description: string;
	product_image_url: string;
	product_name: string;
	product_num: number;
	product_price: number;
	product_type: string;
}
export interface employeeProps {
	contract_hourly_wage: number;
	contract_salary: number;
	department_name: String;
	emp_grade: String;
	emp_id: String;
	emp_name: String;
	emp_phonenum: String;
	is_admin: String;
}
export interface newReserveProps {
	screeningschedule_num: number;
	customer_num: number;
}
export interface reservationNumProps {
	reservation_num: number;
}
export interface seatProps {
	col: number;
	row: number;
	seat_id: number;
}
export interface seatReserveProps {
	schedule_num: number;
	reservation_num: number;
	seat_num: number[];
}
