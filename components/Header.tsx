import Link from 'next/link';
import { Button } from '@material-ui/core';

const linkStyle = {
	marginRight: '1rem',
};
const Header = () => {
	return (
		<header id="header-container">
			<Link href="/">
				<b id="header-logo" title="home">
					서울시네마
				</b>
			</Link>
			<Link href="/">
				<Button>영화 검색</Button>
			</Link>
			<Link href="/about">
				<Button>예매하기</Button>
			</Link>
			<Link href="/about">
				<Button>예매 확인</Button>
			</Link>
			<Link href="/about">
				<Button>마이 페이지</Button>
			</Link>
			<div id="header-log">
				<Link href="/login">
					<b id="header-login">로그인</b>
				</Link>
				&nbsp;&nbsp;|&nbsp;&nbsp;
				<Link href="/signup">
					<b id="header-login">회원 가입</b>
				</Link>
			</div>
		</header>
	);
};

export default Header;
