import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SearchBar } from './SearchBar';

export default {
  title: 'atoms/SearchBar',
  component: SearchBar,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const Default = Template.bind({});
