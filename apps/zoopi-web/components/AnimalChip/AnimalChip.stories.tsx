import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AnimalChip } from './AnimalChip';

export default {
  title: 'atoms/AnimalChip',
  component: AnimalChip,
  argTypes: {},
  args: {
    type: 'dog',
    bloodType: ['DEA1-', 'DEA1.1'],
    name: '뽀숑',
    image: '/images/ex-dog-animalchip.png',
  },
} as ComponentMeta<typeof AnimalChip>;

const Template: ComponentStory<typeof AnimalChip> = (args) => (
  <AnimalChip {...args} />
);

export const Default = Template.bind({});
