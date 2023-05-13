import { createTheme }  from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    custom: any;
    bodyBg: any;
  }

  interface ThemeOptions {
    custom?: any;
    bodyBg?: any;
  }
}


const theme = createTheme({
  palette: {
    primary: {
      main: '#040C18',
      dark: 'rgba(4, 12, 24,0.8)',
      light: 'rgba(4, 12, 24,0.4)',
    },
    secondary: {
      main: '#042C54',
      dark: '#FF4820',
      light: '#81AFDD',
    },
    error: {
      main: '#FF4949',
      dark: '#bb2d3b',
      light: '#eb5463',
    },
  },
  typography: {
    fontFamily:  '"Manrope", sans-serif',
  },
  breakpoints: {
    values: {
      xs: 600,
      sm: 767,
      md: 900,
      lg: 1200,
      xl: 1400,
    },
  },
  custom: {
   
    fontSize: {
      font8: '8px',
      font10: '10px',
      font12: '12px',
      font14: '14px',
      font16: '16px',
      font18: '18px',
      font20: '20px',
      font24: '24px',
    },
    fontWeight: {
      rg: 400,
      md: 500,
      sm: 600,
      bd: 700,
      bl: 800,
    },
    heading: {
      h1: '32px',
      h2: '24px',
      h3: '20px',
    },
    gradient: {
      textgradient: 'linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)',
    }
  },
})


export default theme