import '../styles/global.css';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { EB_Garamond } from 'next/font/google';
import theme from '../theme';

export const ebGaramond = EB_Garamond({
	subsets: ['latin'],
	display: 'swap',
	weight: 'variable',
	// variable: '--font-sans',
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<div className={ebGaramond.className}>
				<Component {...pageProps} />
			</div>
		</ThemeProvider>
	);
}
