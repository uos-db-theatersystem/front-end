import axios from 'axios';
import { createCipher } from 'crypto';
import {
	postMovieProps,
	movieListProps,
	movieProps,
	loginProps,
	nonLoginProps,
	userProps,
	signUpProps,
	schedulesProps,
	productProps,
	employeeProps,
	employeeLoginProps,
	employeeInfoProps,
	newReserveProps,
	reservationNumProps,
	seatReserveProps,
	dateProps,
	wageProps,
	userInfoProps,
	paymentProps,
	discountProps,
	reservationInfo,
	postDiscountProps,
	nonInfoProps,
	newScheduleProps,
} from './interface';

const movieApi = {
	getList: async (): Promise<movieListProps[]> => {
		try {
			const res = await axios.get('/api/movies');
			if (res.status !== 200) {
				throw new Error('getList에러');
			}
			return res.data;
		} catch (e) {
			throw new Error(e);
		}
	},
	getSearch: async (data: string): Promise<movieListProps[]> => {
		try {
			const res = await axios.get(`/api/movies?search=${data}`);
			if (res.status !== 200) {
				throw new Error('getSearch에러');
			}
			return res.data;
		} catch (e) {
			throw new Error(e);
		}
	},
	getInfo: async (id): Promise<movieProps> => {
		try {
			const res = await axios.get(`/api/movies/${id}`);
			if (res.status !== 200) {
				throw new Error('getInfo에러');
			}
			return res.data;
		} catch (e) {
			throw new Error(e);
		}
	},
	postMovie: async (data: postMovieProps) => {
		try {
			const res = await axios.post('/api/movies', data);
			if (res.status !== 201) {
				throw new Error('postMovie에러');
			}
			alert('영화를 성공적으로 추가했습니다.');
		} catch (e) {
			throw new Error(e);
		}
	},
	patchMovie: async (data: postMovieProps, id: number) => {
		try {
			const res = await axios.patch(`/api/movies/${id}`, data);
			if (res.status !== 200) {
				throw new Error('patchMovie error');
			}
		} catch (e) {
			throw new Error(e);
		}
	},
	deleteMovie: async (id: number) => {
		try {
			const res = await axios.delete(`/api/movies/${id}`);
			if (res.status !== 200) {
				throw new Error('deleteMovie에러');
			}
			alert('영화를 성공적으로 삭제했습니다.');
		} catch (e) {
			throw new Error(e);
		}
	},
};
const authApi = {
	login: async (data: loginProps): Promise<userProps> => {
		try {
			const res = await axios.post('/api/auth/login', data);
			if (res.status === 401) {
				alert('입력하신 정보가 올바르지 않습니다.');
				return;
			}
			return res.data;
		} catch (e) {
			throw new Error(e);
		}
	},
	register: async (data: signUpProps) => {
		try {
			const res = await axios.post('/api/auth', data);
			if (res.status !== 201) {
				alert('회원가입 도중 오류가 발생했습니다.');
				throw new Error('register error');
			}
		} catch (e) {
			throw new Error(e);
		}
	},
	nonLogin: async (data: nonLoginProps): Promise<{ user_num: number }> => {
		try {
			const res = await axios.post('/api/auth/nonmembers', data);
			if (res.status !== 200) {
				alert('비회원 정보를 입력도중 오류가 발생했습니다.');
				throw new Error('nonLogin error');
			}
			return res.data;
		} catch (e) {
			throw new Error(e);
		}
	},
	getInfo: async (data: string): Promise<userInfoProps> => {
		try {
			const res = await axios.get(`/api/auth/${data}`);
			if (res.status !== 200) {
				throw new Error('getInfo error');
			}
			return res.data;
		} catch (e) {
			throw new Error(e);
		}
	},
	getNonInfo: async (data: string): Promise<nonInfoProps> => {
		try {
			const res = await axios.get(`/api/auth/non/${data}`);
			if (res.status !== 200) {
				throw new Error('getNonInfo error');
			}
			return res.data;
		} catch (e) {
			throw new Error(e);
		}
	},
};
const schedulesApi = {
	getSchedules: async (id?): Promise<schedulesProps[]> => {
		try {
			const res = await axios.get(`/api/schedules${id ? `?movie_num=${id}` : ''}`);
			if (res.status !== 200) {
				throw new Error('schedules error');
			}
			return res.data;
		} catch (e) {
			throw new Error(e);
		}
	},
	postSchedule: async (data: newScheduleProps) => {
		try {
			const res = await axios.post('/api/schedules', data);
			if (res.status !== 201) {
				throw new Error('postSchedule error');
			}
		} catch (e) {
			throw new Error(e);
		}
	},
	deleteSchedule: async (id: string) => {
		try {
			const res = await axios.delete(`/api/schedules/${id}`);
			if (res.status !== 200) {
				throw new Error('deleteSchedules error');
			}
		} catch (e) {
			throw new Error(e);
		}
	},
	patchSchedule: async (data: newScheduleProps, id: number) => {
		try {
			const res = await axios.patch(`/api/schedules/${id}`, data);
			if (res.status !== 200) {
				throw new Error('patchSchedule error');
			}
		} catch (e) {
			throw new Error(e);
		}
	},
};
const productsApi = {
	getProducts: async (): Promise<productProps[]> => {
		try {
			const res = await axios.get('/api/products');
			if (res.status !== 200) {
				throw new Error('products error');
			}
			return res.data;
		} catch (e) {
			throw new Error(e);
		}
	},
	postProduct: async (data: productProps) => {
		try {
			const res = await axios.post('/api/products', data);
			if (res.status !== 201) {
				throw new Error('postProduct error');
			}
		} catch (e) {
			throw new Error(e);
		}
	},
	deleteProduct: async (data: number) => {
		try {
			const res = await axios.delete(`/api/products/${data}`);
			if (res.status !== 200) {
				throw new Error('product delete error');
			}
		} catch (e) {
			throw new Error(e);
		}
	},
	putProduct: async (data: productProps) => {
		try {
			const res = await axios.put('/api/products', data);
			if (res.status !== 200) {
				throw new Error('product put error');
			}
		} catch (e) {
			throw new Error(e);
		}
	},
};
const employeesApi = {
	getEmployees: async (): Promise<employeeProps[]> => {
		try {
			const res = await axios.get('/api/employees');
			if (res.status !== 200) {
				throw new Error('employees error');
			}
			return res.data;
		} catch (e) {
			throw new Error(e);
		}
	},
	postEmployee: async (data: employeeProps) => {
		try {
			const res = await axios.post('/api/employees', data);
			if (res.status !== 201) {
				throw new Error('employeesPost error');
			}
		} catch (e) {
			throw new Error(e);
		}
	},
	putEmployee: async (data: employeeProps) => {
		try {
			const res = await axios.put(`/api/employees/${data.emp_id}`, data);
			if (res.status !== 200) {
				throw new Error('employeePut error');
			}
		} catch (e) {
			throw new Error(e);
		}
	},
	deleteEmployees: async (id: String) => {
		try {
			const res = await axios.delete(`/api/employees/${id}`);
			if (res.status !== 200) {
				throw new Error('employees error');
			}
		} catch (e) {
			throw new Error(e);
		}
	},
	postLogin: async (data: employeeLoginProps): Promise<employeeInfoProps> => {
		try {
			const res = await axios.post('/api/employees/login', data);
			if (res.status !== 200) {
				throw new Error('employee login error');
			}
			return res.data;
		} catch (e) {
			throw new Error(e);
		}
	},
	postAttend: async (emp_id: string) => {
		try {
			const res = await axios.post('/api/workhistories', { emp_id: emp_id });
			if (res.status !== 201) {
				throw new Error('employee attend error');
			}
		} catch (e) {
			throw new Error(e);
		}
	},
	leaveAttend: async (emp_id: string) => {
		try {
			const res = await axios.patch('/api/workhistories', { emp_id: emp_id });
			if (res.status !== 200) {
				throw new Error('employee attend error');
			}
		} catch (e) {
			throw new Error(e);
		}
	},
};
const reservationApi = {
	postNewReservation: async (data: newReserveProps): Promise<reservationNumProps> => {
		try {
			const res = await axios.post('/api/reservation', data);
			if (res.status !== 200) {
				throw new Error('newReservation error');
			}
			return res.data;
		} catch (e) {
			throw new Error(e);
		}
	},
	getSeatInfo: async ({ schedule_num, auditorium_num }): Promise<number[][]> => {
		try {
			const res = await axios.get(
				`/api/reservation?schedule_num=${schedule_num}&&auditorium_num=${auditorium_num}`
			);
			if (res.status !== 200) {
				throw new Error('getSeatInfo error');
			}
			return res.data;
		} catch (e) {
			throw new Error(e);
		}
	},
	postReservation: async (data: seatReserveProps): Promise<reservationNumProps> => {
		try {
			const res = await axios.post('/api/reservation', data);
			if (res.status !== 200) {
				throw new Error('reservation error');
			}
			return res.data;
		} catch (e) {
			throw new Error(e);
		}
	},
	postPayment: async (data: paymentProps) => {
		try {
			const res = await axios.post('/api/payment', data);
			if (res.status !== 200) {
				throw new Error('payment error');
			}
		} catch (e) {
			throw new Error(e);
		}
	},
	getReservationInfo: async (data: string): Promise<reservationInfo> => {
		try {
			const res = await axios.get(`/api/reservation/${data}`);
			if (res.status !== 200) {
				throw new Error('get reservationInfo error');
			}
			return res.data;
		} catch (e) {
			throw new Error(e);
		}
	},
};
const profitApi = {
	getWage: async ({ from_date, to_date }: dateProps): Promise<wageProps[]> => {
		try {
			const res = await axios.get(
				`/api/workhistories/wage?from_date=${from_date}&to_date=${to_date}`
			);
			if (res.status !== 200) {
				throw new Error('getWage error');
			}
			return res.data;
		} catch (e) {
			throw new Error(e);
		}
	},
	getSales: async ({ from_date, to_date }: dateProps): Promise<{ sales: number }> => {
		try {
			const res = await axios.get(`/api/sales?from_date=${from_date}&to_date=${to_date}`);
			if (res.status !== 200) {
				throw new Error('getSales error');
			}
			return res.data;
		} catch (e) {
			throw new Error(e);
		}
	},
};
const discountApi = {
	getDiscounts: async (): Promise<discountProps[]> => {
		try {
			const res = await axios.get('/api/discount');
			if (res.status !== 200) {
				throw new Error('getDiscounts error');
			}
			return res.data;
		} catch (e) {
			throw new Error(e);
		}
	},
	patchDiscounts: async (data: number) => {
		try {
			const res = await axios.patch(`/api/discount/${data}`);
			if (res.status !== 200) {
				throw new Error('patchDiscount error');
			}
		} catch (e) {
			throw new Error(e);
		}
	},
	postDiscount: async (data: postDiscountProps) => {
		try {
			const res = await axios.post('/api/discount', data);
			if (res.status !== 200) {
				throw new Error('postDiscount error');
			}
		} catch (e) {
			throw new Error(e);
		}
	},
};
export {
	movieApi,
	authApi,
	schedulesApi,
	productsApi,
	employeesApi,
	reservationApi,
	profitApi,
	discountApi,
};
