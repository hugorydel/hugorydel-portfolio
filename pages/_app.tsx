import '../styles/global.css';
import { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Lato } from 'next/font/google';
import theme from '../theme';

export const lato = Lato({
	subsets: ['latin'],
	display: 'swap',
	weight: ['100', '300', '400', '700', '900'],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div className={lato.className}>
				<Component {...pageProps} />
			</div>
		</ThemeProvider>
	);
}
