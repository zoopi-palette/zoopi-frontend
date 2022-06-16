import React from "react"
import {GlobalStyle, ThemeProvider} from "../styles"

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
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
      <Story/>
      <div id="root-modal"></div>
    </ThemeProvider>
  )
]