import {useTheme} from "@emotion/react"
import React, {useCallback, MouseEventHandler, ReactNode, useRef} from "react"
import {Icon} from "@web/components/Icon"

export type ModalProps = {
  onClose: ()=>void,
  height?: string,
  width?:string
  children: ReactNode
}

export const Modal = ({
  onClose,
  height,
  width,
  children,
}: ModalProps) => {
  const theme = useTheme();
  const overlayRef = useRef<HTMLDivElement>(null)

  const handleOverlayClick: MouseEventHandler = useCallback((event)=>{
    const isClickedInside = (event.target instanceof Node) && overlayRef.current?.contains(event.target)

    if (isClickedInside) return;

    onClose();
  },[onClose])

  const handleClickClose: MouseEventHandler = useCallback(
    () => {
      onClose();
    },
    [onClose]
  );

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      css={{
        position:"fixed",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.6)",
      }}
    ><section
    css={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      display: "flex", 
      flexDirection:"column", 
      alignItems: "stretch",
      backgroundColor: theme.colors.white,
      width: width ? width : "fit-content",
      height: height? height: "fit-content",
      minHeight: 200,
      borderRadius: "12px",
      padding: 16
    }}
  >
    <div 
      onClick={handleClickClose} 
      css={{ cursor: 'pointer', position:"absolute", top: 20, right: 20}}>
      <Icon name={'close'} size={15} />
    </div>
    {children}
  </section>
    </div>
  )
}