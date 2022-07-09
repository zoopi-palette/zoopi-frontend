import {useState} from "react"
import {ModalConfirm} from "@web/components/ModalConfirm"
import {ModalLogin} from "@web/components/ModalLogin"

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
        contents={"가입하신 이메일로 링크를 발송했습니다. \n 인증확인 후 비밀번호를 변경하세요!"}
        confirm={{onConfirmClick : ()=>{/** */}}}></ModalConfirm>}
      <button onClick={()=>{setIsModalShow(true)}}>{"Modal Show"}</button>
      <button onClick={()=>{setIsConfirmShow(true)}}>{"Confirm Show"}</button>
    </div>
  )
}

export default ModalTestPage