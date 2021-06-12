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
					<button className="admin-menu">영화관리</button>
				</Link>
				<Link href="/admin/schedules">
					<button className="admin-menu">상영관리</button>
				</Link>
				<Link href="/admin/employee">
					<button className="admin-menu">직원등록</button>
				</Link>
				<Link href="/admin/employees">
					<button className="admin-menu">직원관리</button>
				</Link>
				<Link href="/admin/profit">
					<button className="admin-menu">매출조회</button>
				</Link>
				<Link href="/admin/products">
					<button className="admin-menu">상품관리</button>
				</Link>
				<Link href="/admin/product">
					<button className="admin-menu">상품등록</button>
				</Link>
				<Link href="/admin/discounts">
					<button className="admin-menu">할인관리</button>
				</Link>
				<Link href="/admin/discount">
					<button className="admin-menu">할인등록</button>
				</Link>
			</div>
		</Layout>
	);
};

export default admin;
