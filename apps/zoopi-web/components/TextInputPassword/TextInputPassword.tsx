/* @jsxImportSource @emotion/react */
import {useTheme} from "@emotion/react"
import {useState} from "react"
import {Icon} from "@web/components/Icon"
import {TextInput} from "@web/components/TextInput"
import {TextInputProps} from "@web/components/TextInput/TextInput"

export type TextInputPasswordProps = TextInputProps

export const TextInputPassword = ({
  ...rest
}: TextInputPasswordProps) => {
  const theme = useTheme()

  const [type, setType] = useState<TextInputProps["type"]>("password")

  const handleEyeClick = ()=>{
    setType(prev => prev === "password" ? "text" : "password")
  }

  const label = rest.label === null ? undefined : (rest.label || "비밀번호")

  return (
    <TextInput
      label={label}
      type={type}
      right={(
        <button css={{paddingRight: 2, paddingLeft: 2, cursor: "pointer"}} onClick={handleEyeClick}>
          <Icon name={"eye"} color={theme.colors["grey-60"]}/>
        </button>
      )}
      {...rest}
    />
  )
}