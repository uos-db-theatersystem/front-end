import { atom } from 'recoil';
import { movieProps } from './interface';
const movieState = atom<movieProps[]>({
	key: 'movieState',
	default: [],
});

export { movieState };

//
