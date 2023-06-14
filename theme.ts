import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { lato } from './utils/fonts';

const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: { main: '#000' },
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: themeParam => ({
				body:
					themeParam.palette.mode === 'dark'
						? scrollbarOptions({
								track: 'rgba(202, 204, 206, 0.04)',
								thumb: '#474c50',
								active: '#555',
						  })
						: scrollbarOptions({ track: '#edece9', thumb: '#D3D1CB', active: '#959595' }),
			}),
		},
	},
	typography: {
		fontFamily: lato.style.fontFamily,
		button: {
			textTransform: 'none',
		},
	},
});

function scrollbarOptions(options: { track: string; thumb: string; active: string }) {
	return {
		scrollbarColor: `${options.thumb} ${options.track}`,
		'&::-webkit-scrollbar, & *::-webkit-scrollbar': {
			backgroundColor: options.track,
			width: '10px',
			height: '10px',
		},
		'&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
			backgroundColor: options.thumb,
			minHeight: 24,
		},
		'&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
			backgroundColor: options.active,
		},
		'&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
			backgroundColor: options.active,
		},
		'&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
			backgroundColor: options.active,
		},
		'&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
			backgroundColor: options.track,
		},
	};
}

export default responsiveFontSizes(theme);
