import { atom } from 'recoil';
import { movieListProps } from './interface';
const movieState = atom<movieListProps[]>({
	key: 'movieState',
	default: [],
});

const modalState = atom<{ login: boolean; nonLogin: boolean }>({
	key: 'modalState',
	default: { login: false, nonLogin: false },
});

export { movieState, modalState };
