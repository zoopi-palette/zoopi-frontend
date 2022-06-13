import {ComponentStory, ComponentMeta} from "@storybook/react";

import {TextInputPassword} from "./TextInputPassword";

export default {
  title: "atoms/TextInputPassword",
  component: TextInputPassword,
  argTypes: {
  },
  args: {
  },
} as ComponentMeta<typeof TextInputPassword>;

const Template: ComponentStory<typeof TextInputPassword> = (args) => <TextInputPassword {...args} />;

export const Default = Template.bind({});