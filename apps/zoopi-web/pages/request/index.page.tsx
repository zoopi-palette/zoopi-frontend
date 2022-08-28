import { css, useTheme } from '@emotion/react';
import React, { useEffect } from 'react';
import { Button } from '@web/components/Button';
import { Icon } from '@web/components/Icon';
import { Modal } from '@web/components/Modal';
import { CssObject } from '@web/styles/theme';

const RequestPage = () => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = React.useState(true);
  const [routeToNextPage, setRouteToNextPage] = React.useState(true);
  const onClose = () => setIsOpen(false);

  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(()=>{
    if (textareaRef.current && inputRef.current) {
      setRouteToNextPage(true)
    }
  }, []);

  const titleCss: CssObject =
    { fontWeight: 'bold',color:theme.colors['grey-90'], paddingTop: '1.5rem', paddingBottom:'1.5rem', borderBottom: 1 }
  ;

  const userInputCss: CssObject = { color:theme.colors['grey-90'], '::placeholder':{ color:theme.colors['grey-60'] } };

  const underlineCss: CssObject = { borderStyle: 'solid', borderBottomWidth:1, borderColor:theme.colors['grey-40'] };

  return <Modal width='100%' height='100%' onClose={onClose}>
    <button type='button' onClick={onClose}>
      <Icon name='close' size={24} color={theme.colors['grey-50']}/>
    </button>

    <section css={{ display:'flex', flexDirection: 'column', width: '1200px', height:'100%' }}>
      <h1 css={{ fontSize: '2rem', ...titleCss, ...underlineCss }}>헌혈요청</h1>
      <div css={underlineCss}>

        <h2 css={{ fontSize:'1.25rem', ...titleCss }}>나의 동물</h2>
        <div>
      +
        </div>
      </div>

      <div css={{ paddingTop: '1.625rem',
        paddingBottom: '1.375rem',
        ...underlineCss }}>
        <textarea ref={textareaRef} css={{
          width: '100%',
          border: 0,
          ...userInputCss,
        }} placeholder='헌혈을 요청하는 이유를 상세히 말해주시면 다른분들에게 도움이 됩니다' />
      </div>
      <div css={{
        display: 'flex',
        gap: '1.5rem', }}>
        <h2 css={{
          fontSize: '1.25rem',
          ...titleCss
        }}>혈액 수량</h2>
        <input ref={inputRef} css={{ width: '184px', ...userInputCss }} placeholder='요청할 수량을 입력해주세요' />
      </div>
      <div>
        <Button appearance='outline'>임시저장</Button>
        <Button color='main' appearance='filled' disabled={routeToNextPage}>다음</Button>
      </div>
    </section>
  </Modal>;
};

export default RequestPage;
