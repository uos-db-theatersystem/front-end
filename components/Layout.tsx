import Header from './Header';

const Layout = ({ children }) => {
	const style = { width: '100%', height: '100%' };
	return (
		<div style={style}>
			<Header />
			{children}
		</div>
	);
};
export default Layout;
