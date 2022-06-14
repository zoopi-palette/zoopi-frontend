import {useTheme} from "@emotion/react"
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
      <Icon name={"circle"}/>
    </div>
  )
}

export default HomePage