import {Meta, StoryObj} from "@storybook/react";
import {Button, ButtonProps} from "./Button";
import {FaBeer} from "react-icons/fa";
import "../../App.css";

export default {
  title: "Example/Button",
  component: Button,
  decorators: [
    (Story) => {
      return <div style={{margin: "3em"}}>{Story()}</div>;
    },
  ],
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {
  args: {
    label: "Primary Button",
    onClick: () => {},
    icon: <FaBeer />,
    primary: false,
  },
};

export const Primary: StoryObj<ButtonProps> = {
  args: {
    label: "Secondary Button",
    onClick: () => {},
    icon: <FaBeer />,
    primary: true,
  },
};
