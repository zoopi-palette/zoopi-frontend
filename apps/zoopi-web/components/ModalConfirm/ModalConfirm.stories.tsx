import {ComponentStory, ComponentMeta} from "@storybook/react";
import React from "react";

import {ModalConfirm} from "./ModalConfirm";

export default {
  title: "atoms/ModalConfirm",
  component: ModalConfirm,
  argTypes: {
  },
  args: {
    children: "modal contents",
    confirm: {},
    cancel: {},
  },
} as ComponentMeta<typeof ModalConfirm>;

const Template: ComponentStory<typeof ModalConfirm> = (args) => (
  <div css={{width: "100%", height: "100vh"}}>
    <ModalConfirm {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {

};