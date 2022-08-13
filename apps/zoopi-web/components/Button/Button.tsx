import {ButtonHTMLAttributes, MouseEventHandler, ReactNode, useCallback} from "react"
import {Css, CssObject, Theme} from "@web/styles/theme"

export type ButtonProps = {
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"]
  children?: ReactNode
  className?: string
  disabled?: boolean
  color?: ButtonColor
  appearance?: ButtonAppearance
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export type ButtonColor = "main" | "gray"
export type ButtonAppearance = "filled" | "outline"

export const Button = ({
  children,
  type = "button",
  disabled = false,
  color = "gray",
  appearance = "filled",
  onClick,
  ...rest
}: ButtonProps) => {
  const css: Css = useCallback((theme: Theme)=>{
    const colorAndAppearanceCss: CssObject = {
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: "12px",
      ...colorAppearanceCssRecord[`${color}-${appearance}`](theme)
    }

    const disabledCss: CssObject = {
      ...(disabled ? {cursor: "default", opacity: 0.4, pointerEvents: "none"} : {cursor: "pointer"}),
    }

    return ({
      margin: 0,
      padding: 0,
      width: "100%",
      minWidth: 40,
      height: 56,
      fontSize: "1rem",
      ...colorAndAppearanceCss,
      ...disabledCss,
    } as CssObject)
  },[appearance, color, disabled])

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback((event)=>{
    if (disabled) return;
    onClick?.(event)
  },[disabled, onClick])

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={handleClick}
      {...rest}
      css={css}
    >
      {children}
    </button>
  )
}

const colorAppearanceCssRecord: Record<`${ButtonColor}-${ButtonAppearance}`, (theme: Theme) => CssObject> = {
  "gray-filled": theme => ({
    borderColor: theme.colors["grey-30"],
    backgroundColor: theme.colors["grey-30"],
    color: theme.colors["grey-50"],
    ":hover": {
      borderColor: "#BABBBE",
      backgroundColor: "#BABBBE",
    },
    ":focus": {
      borderColor: "rgba(0, 0, 0, 0.2)",
      borderWidth: 2,
    }
  }),
  "gray-outline": theme => ({
    borderColor: theme.colors["grey-40"],
    backgroundColor: "transparent",
    color: theme.colors["grey-90"],
    ":hover": {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
    ":focus": {
      borderColor: theme.colors["grey-30"],
      borderWidth: 2,
    }
  }),
  "main-filled": theme => ({
    borderColor: theme.colors.main,
    backgroundColor: theme.colors.main,
    color: theme.colors.white,
    ":hover": {
      borderColor: "#CC3231",
      backgroundColor: "#CC3231",
    },
    ":focus": {
      borderColor: "rgba(0, 0, 0, 0.2)",
      borderWidth: 2,
    }
  }),
  "main-outline": theme => ({
    borderColor: theme.colors.main,
    backgroundColor: "transparent",
    color: theme.colors["grey-90"],
    ":hover": {
      backgroundColor: "rgba(255, 62, 61, 0.1)",
    },
    ":focus": {
      borderColor: theme.colors.main,
      borderWidth: 2,
    }
  }),
}