import { Lato, Sacramento } from 'next/font/google';

export const sacramento = Sacramento({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400'],
});

export const lato = Lato({
	subsets: ['latin'],
	display: 'swap',
	weight: ['100', '300', '400', '700', '900'],
});
