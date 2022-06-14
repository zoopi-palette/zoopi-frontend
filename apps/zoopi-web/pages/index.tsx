import {useTheme} from "@emotion/react"
import { Button } from "@web/components/Button"
import { Icon } from "@web/components/Icon"
import { ModalLogin } from "@web/components/ModalLogin"

const HomePage = () => {
  const theme = useTheme()

  return (
    <div>
      <div css={{
        color: theme.colors.main
      }}>
        Home
      </div>
      <ModalLogin onClose={()=>{console.log("modal closed!")}}></ModalLogin>
      <Icon name={"circle"} size={100} color={"red"}/>
      <Button>{"test"}</Button>
    </div>
  )
}

export default HomePage