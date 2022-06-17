import { useTheme } from '@emotion/react';
import { Button } from '@web/components/Button';
import { Icon } from '@web/components/Icon';
import { TextInput } from '@web/components/TextInput';
import { Css, CssObject } from '@web/styles/theme';
import { NextPage } from 'next/types';
import React, { useMemo } from 'react';

const RequestPage: NextPage = () => {
  const theme = useTheme();

  const css: Css = useMemo(() => {
    return {
      borderWidth: 1,
      borderBottomStyle: 'solid',
      borderColor: theme.colors['grey-40'],
      paddingTop: 24,
      paddingBottom: 24,
    } as CssObject;
  }, [theme]);

  return (
    <ul
      css={{
        width: '90%',
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <li css={css}>
        <h1
          css={{
            fontWeight: 'bold',
            fontSize: '2rem',
            color: theme.colors['grey-90'],
          }}
        >
          헌혈요청
        </h1>
      </li>
      <li css={css}>
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <h2
            css={{
              fontWeight: 'bold',
              fontSize: '1.25rem',
              color: theme.colors['grey-90'],
            }}
          >
            나의 동물
          </h2>

          <div
            css={{
              display: 'flex',
              gap: 18,
            }}
          >
            <Icon name={'plus-rectangle'} size={72} />
            {/* <AnimalChip></AnimalChip> */}
          </div>
        </div>
      </li>
      <li css={css}>
        <textarea
          placeholder="헌혈을 요청하는 이유를 상세히 말해주시면 다른분들에게 도움이 됩니다"
          css={{
            color: theme.colors['grey-90'],
            width: '100%',
            height: '40vh',
            resize: 'none',
            border: 'none',

            '::placeholder': {
              color: theme.colors['grey-60'],
            },
          }}
        ></textarea>
      </li>
      <li css={css}>
        <div
          css={{
            display: 'flex',
            gap: 24,
          }}
        >
          <h2
            css={{
              fontWeight: 'bold',
              fontSize: '1.25rem',
              color: theme.colors['grey-90'],
              width: '12%',
            }}
          >
            혈액 수량
          </h2>
          <TextInput
            placeholder="요청할 수량을 입력해 주세요"
            underline={false}
          />
        </div>
      </li>
      <li
        css={{
          paddingTop: 24,
          paddingBottom: 24,
        }}
      >
        <div
          css={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button width={'190px'} color="main" disabled={true}>
            다음
          </Button>
        </div>
      </li>
    </ul>
  );
};

export default RequestPage;
