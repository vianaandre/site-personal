import React from "react"
import { AppProps } from 'next/app'
import GlobalStyled from "../styles/global"
import { ThemeProvider } from "styled-components"
import theme from "../styles/theme"


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyled />
    </ThemeProvider>
  )
}

export default MyApp
