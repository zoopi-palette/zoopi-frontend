import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HospitalItem } from './HospitalItem';

export default {
  title: 'atoms/HospitalItem',
  component: HospitalItem,
  argTypes: {},
  args: {
    id: 1,
    name: '신사동물병원',
    address: '서울 서초구 반포대로 45 명정빌딩',
  },
} as ComponentMeta<typeof HospitalItem>;

const Template: ComponentStory<typeof HospitalItem> = (args) => (
  <HospitalItem {...args} />
);

export const Default = Template.bind({});
