import {useTheme} from "@emotion/react"
import React from "react"
import {ReactSVG} from "react-svg"

export type LogoProps = {
  height: number,
  width: number,
}

export const Logo = ({
  height, width
}: LogoProps) => {
  const theme = useTheme()

  return (
    <span css={{
      color: theme.colors["grey-90"],
      fontSize: 0,
    }}>
      <ReactSVG
        css={{display: "inline-block"}}
        src="/zoopi-logo.svg"
        beforeInjection={(svg) => {
          svg.setAttribute("style", `width: ${width}px; height: ${height}px;`)
        }}
        width={width} height={height}
      />
    </span>
  )
}
