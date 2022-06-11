import {useTheme} from "@emotion/react"
import React from "react"
import { ReactSVG } from 'react-svg'

export type IconName = |
  "arrow-back" |
  "arrow-right" |
  "check-circle" |
  "circle" |
  "close-circle" |
  "close" |
  "eye" |
  "search"

export type IconProps = {
  name: IconName
  color?: string
  size?: number
}

export const Icon = ({
  color,
  size = 24,
  name,
}: IconProps) => {
  const theme = useTheme()
  
  return (
    <span css={{
      color: color ? color : theme.colors["grey-90"],
      fontSize: 0,
    }}>
      <ReactSVG src={`icons/${name}.svg`} width={size} height={size}/>
    </span>
  )
}
