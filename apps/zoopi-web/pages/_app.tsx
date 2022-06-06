import { AppProps } from 'next/app';
import {ThemeProvider} from "@web/styles"

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default CustomApp;
