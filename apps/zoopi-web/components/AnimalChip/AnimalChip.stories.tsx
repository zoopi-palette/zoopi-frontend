import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AnimalChip } from './AnimalChip';

export default {
  title: 'atoms/AnimalChip',
  component: AnimalChip,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof AnimalChip>;

const Template: ComponentStory<typeof AnimalChip> = (args) => (
  <AnimalChip {...args} />
);

export const Default = Template.bind({});
