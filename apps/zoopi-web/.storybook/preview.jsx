import { GlobalStyle, ThemeProvider } from "../styles"
import React from "react"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <GlobalStyle/>
      <div id="root-modal"></div>
      <Story/>
    </ThemeProvider>
  )
]