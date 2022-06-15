import {ComponentStory, ComponentMeta} from "@storybook/react";

import {ModalLogin} from "./ModalLogin";

export default {
  title: "atoms/ModalLogin",
  component: ModalLogin,
  argTypes: {},
} as ComponentMeta<typeof ModalLogin>;

const Template: ComponentStory<typeof ModalLogin> = (args) => (
  <div css={{width: "100%", height: "100%"}}>
    <ModalLogin {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {

};