import {ComponentStory, ComponentMeta} from "@storybook/react";
import React, {useState} from "react"
import {ModalLogin} from "./ModalLogin";

export default {
  title: "atoms/ModalLogin",
  component: ModalLogin,
  argTypes: {},
} as ComponentMeta<typeof ModalLogin>;

const Template: ComponentStory<typeof ModalLogin> = (args) => {
  const [isModalShow, setIsModalShow] = useState(false);

  return <>
  <button onClick={()=>setIsModalShow(true)}>Open Modal</button>
  {isModalShow && <div css={{width: "100%", height: "100%"}}>
    <ModalLogin {...args} onClose={()=>setIsModalShow(false)} />
  </div>}
  </>
};

export const Default = Template.bind({});
Default.args = {

};