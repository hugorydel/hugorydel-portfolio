import '../styles/global.css';
import { AppProps } from 'next/app';
import { CustomThemeContextProvider } from '../theme';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<CustomThemeContextProvider>
			<Component {...pageProps} />
		</CustomThemeContextProvider>
	);
}
