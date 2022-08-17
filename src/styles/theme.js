import { createTheme } from '@mui/material/styles'
import { red, deepOrange, white} from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: '#003056',
		},
		secondary: {
			main: '#28cd7e',
		},
		error: {
			main: deepOrange.A400,
		},
		success: {
			main: red.A400,
		},
		text: {
			primary: '#003056',
			secondary: '#fff',
		}
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: '#ffffff',
					boxShadow: 'unset',
				},
			},
		},
		MuiList: {
			styleOverrides: {
				root: {
					padding: 'unset!important',
				},
			},
		},
	},
	typography: {
		fontFamily: "'Nunito Sans', 'Poppins', 'Roboto', sans-serif",
	},
})

export default theme
