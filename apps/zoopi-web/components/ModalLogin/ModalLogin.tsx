import Link from "next/Link"
import Image from "next/image"
import { useTheme } from '@emotion/react';
import React, {
  useCallback,
  MouseEventHandler,
  ReactNode,
  useRef,
} from 'react';
import {Modal} from "@web/components/Modal"
import { ReactSVG } from 'react-svg'

export type ModalLoginProps = {
  onClose: () => void;
};
const BUTTON_WIDTH = 400;

export const ModalLogin = ({
  onClose,
}: ModalLoginProps) => {
  const theme = useTheme();
  const labelCss = {
    marginBottom: 7,
    fontWeight: 400,
    fontSize: 14,
    color: theme.colors["grey-60"],
  };

  const buttonCss = {
    backgroundColor: "transparent",
    border: `1px solid ${theme.colors["grey-40"]}`,
    width: BUTTON_WIDTH,  
    color: theme.colors["grey-90"],
    marginTop: 16,
    fontWeight: 700,
  }

  return (
    <Modal onClose={()=>{console.log("dd")}}>
      <div css={{padding: "0 20px"}}>
      <span css={{width :157,height:59}}>ZOOPi Logo</span>
        <div css={{flexDirection: "column", width:"100%"}}>
          <form css={{
            marginBottom: 32, 
            display: "flex",
            flexDirection: "column"}}>
            <label css={labelCss}>이메일</label>
            <input type={"email"} name="email" placeholder="sample@example.co.kr"></input>
          </form>
          <form css={{
            marginBottom: 32, 
            display: "flex",
            flexDirection: "column"}}>
            <label css={labelCss}>비밀번호</label>
            <input type={"password"} name="password"></input>
          </form>
        </div>
        <div css={{flexDirection: "column"}}>
          <button
            // color="main" 
            // appearance="filled"
            css={{fontWeight: 700,}}
          >로그인</button>
          <button css={buttonCss}>
            <div css={{position: "absolute"}}>이미지</div>
            카카오로 시작하기
          </button>
          <button css={buttonCss}>
            <div css={{position: "absolute"}}>이미지</div>
            네이버로 시작하기
          </button>
          <div css={{marginTop: 16, alignItems: "center"}}>
            {/* <Link href="/signIn" passHref> */}
              <a css={{
                width: BUTTON_WIDTH/2,
                padding: "13px 0",
                fontSize: 14,
                textAlign: "center",
                color: theme.colors["grey-60"]
              }}>회원가입</a>
              {/* </Link> */}
            <hr css={{
              height: 16,
              color: theme.colors["grey-50"]
            }}></hr>
            {/* <Link href="/signUp" passHref> */}
              <a css={{
                width: BUTTON_WIDTH/2,
                padding: "13px 0",
                fontSize: 14,
                textAlign: "center",
                color: theme.colors["grey-60"]
              }}>비밀번호 찾기</a>
              {/* </Link> */}
          </div>
        </div>
        </div>
    </Modal>
  );
};
