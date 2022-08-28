import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Icon, IconName } from './Icon';

const iconNames: IconName[] = [
  'arrow-back',
  'circle',
  'eye',
  'lock',
  'search',
  'arrow-down',
  'close-circle-big',
  'finish',
  'more',
  'setting',
  'alarm-off',
  'arrow-right',
  'close-circle',
  'google-playstore',
  'naver',
  'share',
  'alarm',
  'attach',
  'close',
  'heart',
  'notice',
  'thanks',
  'alert',
  'block',
  'delete',
  'kakao',
  'posing',
  'wait',
  'apple-store',
  'check-circle',
  'event',
  'leave',
  'report',
  'plus-rounded-rectangle',
];

export default {
  title: 'atoms/Icon',
  component: Icon,
  argTypes: {
    name: {
      options: iconNames,
      control: { type: 'radio' },
    },
  },
  args: {
    name: 'close',
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Close = Template.bind({});
Close.args = {
  name: 'close',
};

export const AllIcons: ComponentStory<typeof Icon> = (props) => (
  <div
    css={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    }}
  >
    {iconNames.map((name) => (
      <div key={name} css={{ padding: '4px' }}>
        <Icon {...props} name={name} />
      </div>
    ))}
  </div>
);
