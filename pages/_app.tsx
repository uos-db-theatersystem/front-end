import { RecoilRoot } from 'recoil';
import '../styles/app.scss';

function App({ Component, pageProps }) {
	return (
		<RecoilRoot>
			<Component {...pageProps} />
		</RecoilRoot>
	);
}

export default App;
