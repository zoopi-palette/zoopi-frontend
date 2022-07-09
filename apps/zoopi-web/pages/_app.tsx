import {AppProps} from "next/app";
import {ThemeProvider, GlobalStyle} from "@web/styles"

function CustomApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default CustomApp;
