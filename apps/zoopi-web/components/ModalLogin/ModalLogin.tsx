import Link from 'next/link'
import {useTheme} from '@emotion/react';
import {Modal} from '@web/components/Modal';
import {Icon} from "@web/components/Icon"
import {Logo} from "@web/components/Logo"
import {Button} from "@web/components/Button"
import {TextInput} from "@web/components/TextInput"
import {TextInputPassword} from "@web/components/TextInputPassword"

export type ModalLoginProps = {
  onClose: () => void;
};
const BUTTON_WIDTH = 400;

export const ModalLogin = ({ onClose }: ModalLoginProps) => {
  const theme = useTheme();
  
  const divCss = {
    marginBottom: 32,
    flexDirction: "column"
  }

  return (
    <Modal
      onClose={onClose}
      height= "713px"
      width="560px"
    >
      <div css={{ padding: '80px', flexDirection: 'column' }}>
        <div css={{justifyContent: "center", marginBottom: 50}}>
          <Logo height={59} width={157}></Logo>
        </div>
        <form
            css={{
              width: '100%',
              marginBottom: 32,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div css={divCss}>
            <TextInput label="이메일" placeholder="sample@example.co.kr" type="email" value=""></TextInput>
            </div>
            <div css={divCss}>
              <TextInputPassword value=""></TextInputPassword>
            </div>
            <Button
            color="main"
            appearance="filled"
            css={{ fontWeight: 700 }}
            >로그인</Button>
          </form>
        <div css={{ flexDirection: 'column', position:"relative"}}>
          <div css={{marginBottom: 16}}>
          <Button appearance="outline">
            <span css={{ position: 'absolute', left:22 }}>
              <Icon name="kakao" size={24}></Icon>
            </span>
            카카오로 시작하기
          </Button>
          </div>
          <div css={{marginBottom: 16}}>
          <Button appearance="outline">
            <span css={{ position: 'absolute', left:22, width: "fit-content"}}>
              <Icon name="naver" size={24}></Icon>
            </span>
            네이버로 시작하기
          </Button>
          </div>
          <div css={{ marginTop: 16, alignItems: 'center' }}>
            <Link href="/signup" passHref>
            <a
              css={{
                width: BUTTON_WIDTH / 2,
                padding: '13px 0',
                fontSize: 14,
                textAlign: 'center',
                color: theme.colors['grey-60'],
              }}
            >
              회원가입
            </a>
            </Link>
            <hr
              css={{
                height: 16,
                color: theme.colors['grey-50'],
              }}
            ></hr>
            <Link href="/find/password" passHref>
            <a
              css={{
                width: BUTTON_WIDTH / 2,
                padding: '13px 0',
                fontSize: 14,
                textAlign: 'center',
                color: theme.colors['grey-60'],
              }}
            >
              비밀번호 찾기
            </a>
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
};
