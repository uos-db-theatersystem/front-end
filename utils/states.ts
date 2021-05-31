import { atom } from 'recoil';
import { movieListProps } from './interface';
const movieState = atom<movieListProps[]>({
	key: 'movieState',
	default: null,
});

const modalState = atom<boolean>({
	key: 'modalState',
	default: false,
});
export { movieState, modalState };
