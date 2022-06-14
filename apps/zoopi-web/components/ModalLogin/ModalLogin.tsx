import {useTheme} from '@emotion/react';
import {Modal} from '@web/components/Modal';
import {Icon} from "@web/components/Icon"
import {TextInput} from "@web/components/TextInput"
import {TextInputPassword} from "@web/components/TextInputPassword"

export type ModalLoginProps = {
  onClose: () => void;
};
const BUTTON_WIDTH = 400;

export const ModalLogin = ({ onClose }: ModalLoginProps) => {
  const theme = useTheme();
  const inputCss = {
    marginBottom: 32,
    display: 'flex',
    flexDirection: 'column',
  }

  const buttonCss = {
    backgroundColor: 'transparent',
    border: `1px solid ${theme.colors['grey-40']}`,
    maxWidth: BUTTON_WIDTH,
    width: '100%',
    color: theme.colors['grey-90'],
    marginTop: 16,
    fontWeight: 700,
  };

  return (
    <Modal
      onClose={() => {
        console.log('dd');
      }}
      height= "713px"
      width="560px"
    >
      <div css={{ padding: '80px', flexDirection: 'column' }}>
        <Icon name="zoopi-logo" size={59}></Icon>
        <div css={{ flexDirection: 'column', width: '100%' }}>
          <form
            css={{
              marginBottom: 32,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div css={inputCss}>
            <TextInput label="이메일" placeholder="sample@example.co.kr" type="email"></TextInput>
            </div>
            <div css={inputCss}>
              <TextInputPassword></TextInputPassword>
            </div>
            <button
            // color="main"
            // appearance="filled"
            css={{ fontWeight: 700 }}
          >
            로그인
          </button>
          </form>
        </div>
        <div css={{ flexDirection: 'column' }}>
          <button css={buttonCss}>
            <div css={{ position: 'absolute' }}>
            <Icon name="kakao" size={24}></Icon>
            </div>
            카카오로 시작하기
          </button>
          <button css={buttonCss}>
            <div css={{ position: 'absolute' }}>
            <Icon name="naver" size={24}></Icon>
            </div>
            네이버로 시작하기
          </button>
          <div css={{ marginTop: 16, alignItems: 'center' }}>
            {/* <Link href="/signIn" passHref> */}
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
            {/* </Link> */}
            <hr
              css={{
                height: 16,
                color: theme.colors['grey-50'],
              }}
            ></hr>
            {/* <Link href="/signUp" passHref> */}
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
            {/* </Link> */}
          </div>
        </div>
      </div>
    </Modal>
  );
};
