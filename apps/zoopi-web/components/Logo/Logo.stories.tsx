import {ComponentStory, ComponentMeta} from "@storybook/react";
import React from "react";

import {Logo} from "./Logo";

export default {
  title: "atoms/Logo",
  component: Logo,
  args: {
    height: 59,
    width: 157
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {

};