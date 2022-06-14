import {useTheme} from "@emotion/react"
import { Icon } from "@web/components/Icon"

const HomePage = () => {
  const theme = useTheme()

  return (
    <div>
      <div css={{
        color: theme.colors.main
      }}>
        Home
      </div>
      <Icon name={"circle"} size={100} color={"red"}/>
    </div>
  )
}

export default HomePage