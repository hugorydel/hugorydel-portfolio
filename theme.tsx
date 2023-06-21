import { ThemeOptions, createTheme, responsiveFontSizes } from '@mui/material/styles';
import React from 'react';
import { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

declare module '@mui/material/styles' {
	interface TypographyVariants {
		primary: React.CSSProperties;
		secondary: React.CSSProperties;
	}
	interface TypographyVariantsOptions {
		primary?: React.CSSProperties;
		secondary?: React.CSSProperties;
	}
}

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		primary: true;
		secondary: true;
	}
}

interface ColorOptionsValues {
	toggleColorMode: () => void;
	mode: 'light' | 'dark';
}

const CustomColorModeContext = React.createContext({
	toggleColorMode: () => {},
	mode: 'dark',
});

export const CustomThemeContextProvider = ({ children }) => {
	const [mode, setMode] = useState<'light' | 'dark'>('dark');

	const initialValues: ColorOptionsValues = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
			},
			mode,
		}),
		[mode]
	);

	const theme = React.useMemo(
		() =>
			responsiveFontSizes(
				createTheme({
					palette: {
						mode,
						primary: { main: '#111' },
						secondary: { main: '#e01505' },
					},
					components: {
						MuiCssBaseline: {
							styleOverrides: themeParams => handleScrollbarStyling(themeParams),
						},
					},
					typography: {
						fontFamily: 'Lato',
						body1: {
							fontFamily: 'Lato',
						},
						primary: {
							fontFamily: 'Lato',
						},
						secondary: {
							fontFamily: 'Sacramento',
						},
						button: {
							textTransform: 'none',
						},
					},
				})
			),
		[mode]
	);

	return (
		<CustomColorModeContext.Provider value={initialValues}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</CustomColorModeContext.Provider>
	);
};

export const useColorMode = () => React.useContext(CustomColorModeContext);

function handleScrollbarStyling(themeParam: Omit<ThemeOptions, 'components'>) {
	return {
		body:
			themeParam.palette.mode === 'dark'
				? scrollbarOptions({
						track: 'rgba(202, 204, 206, 0.00)',
						thumb: '#666',
						active: '#e01505',
				  })
				: scrollbarOptions({ track: '#edece9', thumb: '#D3D1CB', active: '#e01505' }),
	};
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
}