import { atom } from 'recoil';
import { movieListProps } from './interface';
const movieState = atom<movieListProps[]>({
	key: 'movieState',
	default: [],
});

export { movieState };

//
