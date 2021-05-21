import axios from 'axios';
import { postMovieProps, movieListProps, movieProps, loginProps, signUpProps } from './interface';

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
	login: async (data: loginProps) => {},
	register: async (data: signUpProps) => {},
};
export { movieApi, authApi };
