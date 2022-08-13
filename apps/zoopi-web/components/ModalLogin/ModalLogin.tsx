import { useTheme } from '@emotion/react';
import Link from 'next/link';
import {
  useCallback,
  FormEventHandler,
  useRef,
  forwardRef,
  MutableRefObject,
  ElementType,
} from 'react';
import { Button } from '@web/components/Button';
import { Icon } from '@web/components/Icon';
import { Logo } from '@web/components/Logo';
import { Modal } from '@web/components/Modal';
import { TextInput, TextInputProps } from '@web/components/TextInput';
import {
  TextInputPassword,
  TextInputPasswordProps,
} from '@web/components/TextInputPassword';

const BUTTON_WIDTH = 400;

export type ModalLoginProps = {
  onClose: () => void;
};

export const ModalLogin = ({ onClose }: ModalLoginProps) => {
  const theme = useTheme();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmitLogin: FormEventHandler = useCallback((event) => {
    event.preventDefault();

    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;

    // eslint-disable-next-line no-console
    console.log(email, password);
  }, []);

  const ForwardedComponent = <T,>(
    Component: ElementType,
    props: T,
    displayName: string
  ) => {
    const forwardedRef = (_, ref: MutableRefObject<HTMLInputElement>) => (
      <Component forwardedRef={ref} {...props} />
    );
    forwardedRef.displayName = displayName;
    return forwardRef(forwardedRef);
  };

  const EmailField = ForwardedComponent<TextInputProps>(
    TextInput,
    { label: '이메일', placeholder: 'sample@example.co.kr', type: 'email' },
    'EmailInput'
  );
  const PasswordField = ForwardedComponent<TextInputPasswordProps>(
    TextInputPassword,
    {},
    'PasswordInput'
  );

  return (
    <Modal onClose={onClose} height="600px" width="560px">
      <div
        css={{
          padding: '0 80px',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
        }}
        aria-label="loginForm"
      >
        <button
          type="button"
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus // TODO: fix eslint error
          onClick={onClose}
          css={{
            position: 'absolute',
            display: 'inline-block',
            top: 20,
            right: 20,
            marginLeft: 10,
          }}
        >
          <Icon name="close" size={24} />
        </button>
        <div
          css={{ justifyContent: 'center', marginBottom: 50 }}
          aria-label="zoopi logo"
        >
          <Logo height={59} width={157} />
        </div>
        <form
          onSubmit={handleSubmitLogin}
          css={{
            width: '100%',
            marginBottom: 16,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div css={{ marginBottom: 32 }}>
            <EmailField ref={emailRef} />
          </div>

          <div css={{ marginBottom: 32 }}>
            <PasswordField ref={passwordRef} />
          </div>
          <Button color="main" appearance="filled" css={{ fontWeight: 700 }}>
            로그인
          </Button>
        </form>
        <div css={{ flexDirection: 'column', position: 'relative' }}>
          <Button appearance="outline" css={{ marginBottom: 16 }}>
            <span
              css={{
                position: 'absolute',
                left: 22,
                width: 'fit-content',
                color: theme.colors['grey-70'],
              }}
            >
              <Icon name="naver" size={24} />
            </span>
            네이버로 시작하기
          </Button>
          <div css={{ marginTop: 16, alignItems: 'center' }}>
            <Link href="/signup" passHref>
              {/* TODO: fix eslint error */}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
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
            />
            <Link href="/find/id" passHref>
              {/* TODO: fix eslint error */}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                css={{
                  width: BUTTON_WIDTH / 2,
                  padding: '13px 0',
                  fontSize: 14,
                  textAlign: 'center',
                  color: theme.colors['grey-60'],
                }}
              >
                아이디 찾기
              </a>
            </Link>
            <hr
              css={{
                height: 16,
                color: theme.colors['grey-50'],
              }}
            />
            <Link href="/find/password" passHref>
              {/* TODO: fix eslint error */}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
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
