import Link from 'next/link';
import { Button } from '@material-ui/core';
import { useSetRecoilState } from 'recoil';
import { modalState } from '../utils/states';
import { LoginModal } from './index';
const Header = () => {
	const setOpen = useSetRecoilState(modalState);
	return (
		<header id="header-container">
			<LoginModal />
			<Link href="/">
				<b id="header-logo" title="home">
					서울시네마
				</b>
			</Link>
			<Link href="/search">
				<Button>영화 검색</Button>
			</Link>
			<Link href="/reservation">
				<Button>예매하기</Button>
			</Link>
			<Link href="/about">
				<Button>예매 확인</Button>
			</Link>
			<Link href="/about">
				<Button>마이 페이지</Button>
			</Link>
			<div id="header-log">
				<b
					id="header-login"
					onClick={() => {
						setOpen(true);
					}}
				>
					로그인
				</b>
				&nbsp;&nbsp;|&nbsp;&nbsp;
				<Link href="/signup">
					<b id="header-login">회원 가입</b>
				</Link>
			</div>
		</header>
	);
};

export default Header;
