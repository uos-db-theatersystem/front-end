import Link from 'next/link';

const admin = () => {
	return (
		<div className="admin-container">
			<title>관리자 페이지</title>
			<header id="admin-header">관리자 페이지</header>
			<Link href="/">
				<a id="admin-logout">logout</a>
			</Link>
			<div id="admin-menus">
				<Link href="/admin/movie">
					<button className="admin-menu">영화등록</button>
				</Link>
				<Link href="/admin/movies">
					<button className="admin-menu">영화수정</button>
				</Link>
				<Link href="/admin/employee">
					<button className="admin-menu">직원관리</button>
				</Link>
				<Link href="/admin/profit">
					<button className="admin-menu">매출조회</button>
				</Link>
			</div>
		</div>
	);
};

export default admin;
