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
	genres: string[];
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
export interface nonLoginProps {
	name: string;
	phone_number: string;
}
export interface userProps {
	Token: string;
	user_num: number;
}
export interface userInfoProps {
	name: string;
	phone: string;
	point: number;
	reservation_list: reservationProps[];
}
export interface nonInfoProps {
	name: string;
	phone: string;
	reservation_list: reservationProps[];
}
interface reservationProps {
	reservation_date: string;
	reservation_num: number;
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
	ticket_price: number;
}
export interface newScheduleProps {
	movie_num?: number;
	screening_date: number;
	auditorium_num: number;
	screening_time: number;
	ticket_price: number;
}
export interface productProps {
	product_description: string;
	product_image_url: string;
	product_name: string;
	product_num?: number;
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
	emp_pw?: String;
}
export interface employeeLoginProps {
	emp_id: string;
	emp_password: string;
}
export interface employeeInfoProps {
	Token: string;
	is_admin: 'Y' | 'N';
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
	customer_num: number;
	seat_num: number[];
}
export interface paymentProps {
	reservation_num: number;
	payment_type: string;
	standard_price: number;
	is_point_used: string;
	used_point: number;
	payment_price: number;
	dcnt_after_price: number;
	is_payment_canceled: string;
	dcnt_num: number;
	card_comp_name: string;
	card_num: string;
	sender_name: string;
	sender_accountnum: string;
}
export interface dateProps {
	from_date: string;
	to_date: string;
}
export interface wageProps {
	emp_id: string;
	emp_name: string;
	wage: number;
}
export interface discountProps {
	discount_name: string;
	discount_num: number;
	discount_percentage: number;
	discount_price: number;
	discount_type: string;
	is_promotion: 'y' | 'n';
}
export interface postDiscountProps {
	type: '0000' | '0001';
	name: string;
	percentage: number;
	price: number;
}
export interface reservationInfo {
	auditorium_num: number;
	is_payment_canceled: 'y' | 'n';
	is_ticketing: 'y' | 'n';
	movie_name: string;
	movie_poster_url: string;
	payment_price: number;
	reservation_num: number;
	running_time: number;
	screening_date: number;
	screening_time: number;
	seat_cnt: number;
	seat_num: { col: number; row: number }[];
}
