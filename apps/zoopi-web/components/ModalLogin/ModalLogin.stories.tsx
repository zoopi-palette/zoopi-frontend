import {ComponentStory, ComponentMeta} from "@storybook/react";
import React from "react";

import {ModalLogin} from "./ModalLogin";

export default {
  title: "atoms/ModalLogin",
  component: ModalLogin,
  argTypes: {
  },
  args: {
    title: "title",
    children: "content",
    confirm: {},
    cancel: {},
  },
} as ComponentMeta<typeof ModalLogin>;

const Template: ComponentStory<typeof ModalLogin> = (args) => (
  <div css={{width: "100%", height: "100vh"}}>
    <ModalLogin {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {

};