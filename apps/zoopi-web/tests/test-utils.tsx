import {render} from "@testing-library/react"
import {ReactElement} from "react";
import {ThemeProvider, GlobalStyle} from "@web/styles"

function Providers({children}: {children: ReactElement}) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

type RenderParameters = Parameters<typeof render>

const customRender = (ui: RenderParameters[0], options?: RenderParameters[1]) =>
  render(ui, {wrapper: Providers, ...options})

export * from "@testing-library/react"
export {customRender as render}
