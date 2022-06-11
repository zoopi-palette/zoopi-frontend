import {ComponentStory, ComponentMeta} from "@storybook/react";
import React from "react";

import {Icon, IconName} from "./Icon";

const iconNames: IconName[] = ["arrow-back", "arrow-right", "check-circle", "circle", "close-circle", "close", "eye", "search"]

export default {
  title: "atoms/Icon",
  component: Icon,
  argTypes: {
    name: {
      options: iconNames,
      control: {type: "radio"},
    },
  },
  args: {
    name: "close",
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Close = Template.bind({});
Close.args = {
  name: "close",
};

export const AllIcons: ComponentStory<typeof Icon> = (props) => {
  return (
    <div css={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
    }}>
      {iconNames.map(name=>(
        <div key={name} css={{padding: "4px"}}>
          <Icon {...props} name={name}/>
        </div>
      ))}
    </div>
  ) 
}
