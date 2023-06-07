import '../styles/global.css';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { EB_Garamond } from 'next/font/google';

export const ebGaramond = EB_Garamond({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={`${ebGaramond.className}`}>
			<Component {...pageProps} />
		</div>
	);
}
