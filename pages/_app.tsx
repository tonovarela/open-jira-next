

import { createTheme,CssBaseline,ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { lightTheme,darkTheme } from '../themes';
import { UIProvider } from '../context/ui';
function MyApp({ Component, pageProps }: AppProps) {
  return (
  <UIProvider>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
      <Component {...pageProps} />   
      </CssBaseline>     
    </ThemeProvider>
    </UIProvider>      
  )
}

export default MyApp
