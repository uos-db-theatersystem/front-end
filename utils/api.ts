import axios from 'axios';
import { movieProps } from './interface';

export const movieApi = {
	getList: async () => {
		try {
			const res = await axios.get('/movies');
			if (res.status !== 200) {
				throw new Error('getList에러');
			}
		} catch (e) {
			throw new Error(e);
		}
	},
};
