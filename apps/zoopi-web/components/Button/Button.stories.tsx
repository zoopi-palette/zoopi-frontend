import {ComponentStory, ComponentMeta} from "@storybook/react";
import React from "react";

import {Button, ButtonAppearance, ButtonColor} from "./Button";

const buttonColors: ButtonColor[] = ["main", "gray"] 
const buttonApperances: ButtonAppearance[] = ["filled", "outline"] 

export default {
  title: "atoms/Button",
  component: Button,
  argTypes: {
    size: {
      options: buttonColors,
      control: {type: "radio"},
    },
    appearance: {
      options: buttonApperances,
      control: {type: "radio"},
    },
    disabled: {
      control: {type: "boolean"},
    },
  },
  args: {
    disabled: false,
    size: "md",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Main = Template.bind({});
Main.args = {
  color: "main",
  children: "main",
};

export const Gray = Template.bind({});
Gray.args = {
  color: "gray",
  children: "gray",
};

export const AllButtons = () => {
  return (
    <div css={{
      display: "flex",
      flexDirection: "row"
    }}>
      {buttonColors.map(color=>(
        <div key={color} css={{display: "flex", flexDirection: "column"}}>{buttonApperances.map(appearance=>(
          <div key={`${color}-${appearance}`} css={{display: "flex", flexDirection: "column", padding: 8}}>
            <div css={{padding: 8}} >
              <Button color={color} appearance={appearance}>
                {`${color}-${appearance}`}
              </Button>
            </div>
            <div css={{padding: 8}} >
              <Button color={color} appearance={appearance} disabled>
                {"disabled"}
              </Button>
            </div>
          </div>
        ))}</div>
      ))}
    </div>
  )
}

