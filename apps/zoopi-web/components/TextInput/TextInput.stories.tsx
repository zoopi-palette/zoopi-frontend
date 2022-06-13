import {ComponentStory, ComponentMeta} from "@storybook/react";

import {TextInput} from "./TextInput";

export default {
  title: "atoms/TextInput",
  component: TextInput,
  argTypes: {
  },
  args: {
    label: "label",
    placeholder: "placeholder"
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});