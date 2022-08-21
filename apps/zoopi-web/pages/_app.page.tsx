import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProps } from 'next/app';
import { ThemeProvider, GlobalStyle } from '@web/styles';

const queryClient = new QueryClient();

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  </QueryClientProvider>
);

export default CustomApp;
