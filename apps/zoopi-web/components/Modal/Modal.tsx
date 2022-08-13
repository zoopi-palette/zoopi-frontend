import {useTheme} from "@emotion/react"
import React, {useCallback, MouseEventHandler, ReactNode, useState, useRef, useEffect} from "react"
import {createPortal} from "react-dom";

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
  const [isMount,setIsMount] = useState(false);
  const modalInsideRef = useRef<HTMLDivElement>(null)

  const handleOverlayClick: MouseEventHandler = useCallback((event)=>{
    const isClickedOverlay = (event.target instanceof Node) && !modalInsideRef.current?.contains(event.target)
    if (!isClickedOverlay) return;

    onClose();
  },[onClose])

  useEffect(()=>{
    setIsMount(true)
  },[])

  return isMount ? (createPortal(
    // TODO: uncomment and fix eslint errors
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      onClick={handleOverlayClick}
      css={{
        position:"fixed",
        top:0,
        left:0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.6)",
      }}>
      <section ref={modalInsideRef} role="dialog" aria-labelledby="dialogTitle" aria-describedby="dialogDesc" aria-live='polite' aria-atomic="true" aria-modal="true"
        css={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection:"column",
          alignItems: "stretch",
          justifyContent: "space-between",
          backgroundColor: theme.colors.white,
          width: width || "fit-content",
          height: height || "fit-content",
          minWidth: 386,
          minHeight: 200,
          borderRadius: "12px",
          padding: 20,
        }}>
        {children}
      </section>
    </div>,document.querySelector("#root-modal") as Element))
    : null;
}