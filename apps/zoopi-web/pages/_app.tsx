import {ThemeProvider, GlobalStyle} from "@web/styles"
import {AppProps} from "next/app";

function CustomApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default CustomApp;
