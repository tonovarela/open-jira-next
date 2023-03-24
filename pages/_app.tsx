

import { createTheme,CssBaseline,ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { lightTheme,darkTheme } from '../themes';



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
      <Component {...pageProps} />   
      </CssBaseline>     
    </ThemeProvider>
  
  )
}

export default MyApp
