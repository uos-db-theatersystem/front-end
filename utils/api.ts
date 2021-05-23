import axios from 'axios';
import {
	postMovieProps,
	movieListProps,
	movieProps,
	loginProps,
	signUpProps,
	schedulesProps,
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
			const res = await axios.post('/api/movies', {
				...data,
				genres: data.genres.replace(' ', '').split(','),
			});
			if (res.status !== 201) {
				throw new Error('postMovie에러');
			}
			alert('영화를 성공적으로 추가했습니다.');
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
	login: async (data: loginProps) => {
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
};
const schedulesApi = {
	getSchedules: async (id?: number) => {
		try {
			const res = await axios.post(`/api/schedules${id ? `?movie_num=${id}` : ''}`);
			if (res.status !== 200) {
				throw new Error('schedules error');
			}
			return res.data;
		} catch (e) {
			throw new Error(e);
		}
	},
};
export { movieApi, authApi, schedulesApi };
