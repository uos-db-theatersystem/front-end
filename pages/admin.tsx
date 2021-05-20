import Link from 'next/link';
import { Layout } from '../components/index';
const admin = () => {
	return (
		<Layout>
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
		</Layout>
	);
};

export default admin;
