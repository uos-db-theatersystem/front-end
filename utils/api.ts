import axios from 'axios';
import { movieProps } from './interface';

const movieApi = {
	getList: async (): Promise<movieProps[]> => {
		try {
			const res = await axios.get('/movies');
			if (res.status !== 200) {
				throw new Error('getList에러');
			}
			return res.data;
		} catch (e) {
			throw new Error(e);
		}
	},
};

export { movieApi };
