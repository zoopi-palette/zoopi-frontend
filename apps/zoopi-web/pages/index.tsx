import {useTheme} from "@emotion/react"
import { Button } from "@web/components/Button"
import { Icon } from "@web/components/Icon"
import { ModalLogin } from "@web/components/ModalLogin"
import { ModalConfirm } from "@web/components/ModalConfirm"
import { useState,useCallback } from 'react'

const HomePage = () => {
  const theme = useTheme();
  const [isModalShow, setIsModalShow] = useState(false);
  const [isConfirmShow, setIsConfirmShow] = useState(false);

  return (
    <div>
      <div css={{
        color: theme.colors.main
      }}>
        Home
      </div>
      {isModalShow && <ModalLogin 
        onClose={()=>{setIsModalShow(false)}}></ModalLogin>}

      {isConfirmShow && <ModalConfirm 
        onClose={()=>{setIsConfirmShow(false)}} 
        title="링크발송" 
        contents={`가입하신 이메일로 링크를 발송했습니다. 인증확인 후 비밀번호를 변경하세요!`}
        confirm={{onConfirmClick : ()=>{/** */}}}></ModalConfirm>}
      <Icon name={"circle"} size={100} color={"red"}/>
      <Button onClick={()=>{setIsModalShow(true)}}>{"Modal Show"}</Button>
      <Button onClick={()=>{setIsConfirmShow(true)}}>{"Confirm Show"}</Button>
    </div>
  )
}

export default HomePage