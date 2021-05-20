import Header from './Header';
import { useRouter } from 'next/router';
import Link from 'next/link';
const Layout = ({ children }) => {
	const router = useRouter();
	const style = { width: '100%', height: '100%' };
	return router.pathname.indexOf('admin') === -1 ? (
		<div style={style}>
			<Header />
			{children}
		</div>
	) : (
		<div style={style}>
			<div className="admin-container">
				<title>관리자 페이지</title>
				<Link href="/admin">
					<header id="admin-header">관리자 페이지</header>
				</Link>
				<Link href="/">
					<a id="admin-logout">logout</a>
				</Link>
				{children}
			</div>
		</div>
	);
};
export default Layout;
