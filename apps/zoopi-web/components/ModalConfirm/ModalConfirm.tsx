import {useTheme} from "@emotion/react"
import React, {useCallback, MouseEventHandler, ReactNode, useRef} from "react"
import {Icon} from "@web/components/Icon"
import {Modal} from "@web/components/Modal"

export type ModalConfirmProps = {
  onClose: ()=>void
  title?: string
  children: ReactNode
  cancel?: {
    children?: string
    onClick?: ()=>void
  }
  confirm?: {
    disabled?: boolean
    children?: string
    onClick?: ()=>void
  }
}

export const ModalConfirm = ({
  onClose,
  title,
  children,
  confirm,
  cancel,
}: ModalConfirmProps) => {
  const theme = useTheme();

  const modalRef = useRef<HTMLDivElement>(null)

  return (
    <Modal onClose={()=>{console.log("dd")}}>
      <div
        ref={modalRef}
        css={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
        }}
      >
        <div css={{ fontSize: '1.125rem', fontWeight: 'bold' }}>{title}</div>
        
      </div>
      <div
        css={{
          width: '100%',
          flexGrow: 1,
          flexShrink: 1,
          marginBottom: 16,
        }}
      ></div>
      <div css={{ width: '100%' }}>
        <div
          css={{
            margin: '-6px',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {cancel && (
            <div css={{ flex: 1, padding: '6px' }}>
              <button onClick={cancel.onClick}>
                {cancel.children || 'Cancel'}
              </button>
            </div>
          )}
          {confirm && (
            <div css={{ flex: 1, padding: '6px' }}>
              <button
                color={'main'}
                disabled={confirm.disabled}
                onClick={confirm.onClick}
              >
                {confirm.children || 'Confirm'}
              </button>
            </div>
          )}
        </div>
      </div>
    </Modal>
  )
}