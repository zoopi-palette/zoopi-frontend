import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import { ModalConfirm } from './ModalConfirm';

export default {
  title: 'atoms/ModalConfirm',
  component: ModalConfirm,
  argTypes: {},
  args: {
    confirm: {
      confirmMessage: '확인',
    },
    cancel: {
      cancelMessage: '취소',
    },
    title: '링크 발송',
    contents:
      '가입하신 이메일로 링크를 발송했습니다. \n 인증확인 후 비밀번호를 변경하세요!',
  },
} as ComponentMeta<typeof ModalConfirm>;

const Template: ComponentStory<typeof ModalConfirm> = (args) => {
  const [isModalShow, setIsModalShow] = useState(false);

  return (
    <>
      <button type='button' onClick={() => setIsModalShow(true)}>
        Open Modal
      </button>
      {isModalShow && (
        <div css={{ width: '100%', height: '100%' }}>
          <ModalConfirm {...args} onClose={() => setIsModalShow(false)} />
        </div>
      )}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
