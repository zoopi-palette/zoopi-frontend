import {ComponentStory, ComponentMeta} from "@storybook/react";
import {Modal} from "./Modal";

export default {
  title: "atoms/Modal",
  component: Modal,
  argTypes: {},
  args: {
    children: <div>modal contents 입니다.</div>
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <div css={{width: "100%", height: "100vh"}}>
    <Modal {...args}></Modal>
  </div>
);

export const Default = Template.bind({});
Default.args = {

};