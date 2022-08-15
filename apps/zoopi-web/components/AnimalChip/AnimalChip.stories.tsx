import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AnimalChip } from './AnimalChip';

export default {
  title: 'atoms/AnimalChip',
  component: AnimalChip,
  argTypes: {},
  args: {
    animalType: 'dog',
    bloodType: ['DEA1-', 'DEA1.1'],
    animalName: '뽀숑',
    avatar: '/images/ex-dog-animalchip.png',
  },
} as ComponentMeta<typeof AnimalChip>;

const Template: ComponentStory<typeof AnimalChip> = (args) => (
  <AnimalChip {...args} />
);

export const Default = Template.bind({});
