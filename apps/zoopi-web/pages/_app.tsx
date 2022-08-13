import {AppProps} from "next/app";
import {ThemeProvider, GlobalStyle} from "@web/styles"

const CustomApp = ({Component, pageProps}: AppProps) => (
  <ThemeProvider>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default CustomApp;
