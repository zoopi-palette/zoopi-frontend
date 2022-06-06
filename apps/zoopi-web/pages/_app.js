import { ThemeProvider } from "@web/styles";
function CustomApp({ Component, pageProps }) {
    return (<ThemeProvider>
      <Component {...pageProps}/>
    </ThemeProvider>);
}
export default CustomApp;
//# sourceMappingURL=_app.js.map