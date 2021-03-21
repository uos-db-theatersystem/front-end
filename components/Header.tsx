import Link from 'next/link';
import { Button } from '@material-ui/core';

const linkStyle = {
	marginRight: '1rem',
};
const Header = () => {
	return (
		<header id="header-container">
			<Link href="/">
				<Button>홈</Button>
			</Link>
			<Link href="/about">
				<Button>소개</Button>
			</Link>
		</header>
	);
};

export default Header;
