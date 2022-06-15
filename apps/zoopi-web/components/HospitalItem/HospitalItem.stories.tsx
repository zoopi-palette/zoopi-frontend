import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HospitalItem } from './HospitalItem';

export default {
  title: 'atoms/HospitalItem',
  component: HospitalItem,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof HospitalItem>;

const Template: ComponentStory<typeof HospitalItem> = (args) => (
  <HospitalItem {...args} />
);

export const Default = Template.bind({});
