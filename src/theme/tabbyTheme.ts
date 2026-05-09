import { createTheme } from '@mui/material/styles'

export const tabbyTheme = createTheme({
  palette: {
    primary: { main: '#179958' },
    secondary: { main: '#5d21de' },
    error: { main: '#e81e40' },
    background: { default: '#f2f5f7' },
  },
  typography: {
    fontFamily: 'Inter, "Noto Sans Arabic", Arial, sans-serif',
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 8 } } },
    MuiPaper: { styleOverrides: { root: { borderRadius: 12 } } },
  },
})