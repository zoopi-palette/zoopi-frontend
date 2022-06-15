import {useTheme} from "@emotion/react"
import { Button } from "@web/components/Button"
import { Icon } from "@web/components/Icon"
import { ModalLogin } from "@web/components/ModalLogin"
import { useState,useCallback } from 'react'

const HomePage = () => {
  const theme = useTheme();
  const [isModalShow, setIsModalShow] = useState(false);
  
  const handleModalShow = useCallback(()=>{
    setIsModalShow(true)
  },[setIsModalShow])
  const handleModalHide = useCallback(()=>{
    setIsModalShow(false)
  },[setIsModalShow])


  return (
    <div>
      <div css={{
        color: theme.colors.main
      }}>
        Home
      </div>
      {isModalShow && <ModalLogin onClose={handleModalHide}></ModalLogin>}
      <Icon name={"circle"} size={100} color={"red"}/>
      <Button onClick={handleModalShow}>{"Modal Show"}</Button>
    </div>
  )
}

export default HomePage