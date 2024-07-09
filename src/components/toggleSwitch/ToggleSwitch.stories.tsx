import {Meta, StoryObj} from "@storybook/react";
import {ToggleSwitch, ToggleSwitchProps} from "./ToggleSwitch";
import "../../App.css";

export default {
  title: "Example/ToggleSwitch",
  component: ToggleSwitch,
  decorators: [
    (Story) => {
      return <div style={{margin: "3em"}}>{Story()}</div>;
    },
  ],
} as Meta<ToggleSwitchProps>;

export const Default: StoryObj<ToggleSwitchProps> = {
  args: {
    isChecked: true,
    onToggle: (isChecked) => {
      console.log(isChecked);
    },
  },
};

export const Primary: StoryObj<ToggleSwitchProps> = {
  args: {
    isChecked: false,
    onToggle: (isChecked) => {
      console.log(isChecked);
    },
  },
};
