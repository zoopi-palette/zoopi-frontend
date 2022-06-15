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
  const modalInsideRef = useRef<HTMLDivElement>(null)

  const handleOverlayClick: MouseEventHandler = useCallback((event)=>{
    const isClickedOverlay = (event.target instanceof Node) && !modalInsideRef.current?.contains(event.target)

    if (!isClickedOverlay) return;

    onClose();
  },[onClose])

  const handleClickClose: MouseEventHandler = useCallback(() => {
      onClose();
  },[onClose]);

  return (
    <div
      onClick={handleOverlayClick}
      css={{
        position:"fixed",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.6)",
      }}>
      <section ref={modalInsideRef} css={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex", 
        flexDirection:"column", 
        alignItems: "stretch",
        justifyContent: "space-between",
        backgroundColor: theme.colors.white,
        width: width ? width : "fit-content",
        height: height? height: "fit-content",
        minWidth: 386,
        minHeight: 200,
        borderRadius: "12px",
        padding: 20,
        }}>
          {children}
        </section>
      </div>
  )
}