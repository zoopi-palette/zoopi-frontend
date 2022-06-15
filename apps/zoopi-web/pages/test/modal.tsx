import { ModalLogin } from "@web/components/ModalLogin"
import { ModalConfirm } from "@web/components/ModalConfirm"
import { Button } from "@web/components/Button"
import { useState } from 'react'

const ModalTestPage = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const [isConfirmShow, setIsConfirmShow] = useState(false);

  return (
    <div>
      {isModalShow && <ModalLogin 
        onClose={()=>{setIsModalShow(false)}}></ModalLogin>}

      {isConfirmShow && <ModalConfirm 
        onClose={()=>{setIsConfirmShow(false)}} 
        title="링크발송" 
        contents={`가입하신 이메일로 링크를 발송했습니다. \n 인증확인 후 비밀번호를 변경하세요!`}
        confirm={{onConfirmClick : ()=>{/** */}}}></ModalConfirm>}
      <Button onClick={()=>{setIsModalShow(true)}}>{"Modal Show"}</Button>
      <Button onClick={()=>{setIsConfirmShow(true)}}>{"Confirm Show"}</Button>
    </div>
  )
}

export default ModalTestPage