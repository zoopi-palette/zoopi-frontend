import {useTheme} from "@emotion/react"
import { Button } from "@web/components/Button"
import { Icon } from "@web/components/Icon"

const HomePage = () => {
  const theme = useTheme();

  return (
    <div>
      <div css={{
        color: theme.colors.main
      }}>
        Home
      </div>
      <Icon name={"circle"} size={100} color={"red"}/>
      <Button>{"Button"}</Button>
    </div>
  )
}

export default HomePage