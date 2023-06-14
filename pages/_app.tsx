import '../styles/global.css';
import { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../theme';
import { lato } from '../utils/fonts';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<div className={lato.className}>
				<CssBaseline />
				<Component {...pageProps} />
			</div>
		</ThemeProvider>
	);
}
