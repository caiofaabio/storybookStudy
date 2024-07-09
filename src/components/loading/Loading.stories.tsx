import {Meta, StoryObj} from "@storybook/react";
import {Loading} from "./Loading";
import "../../App.css";

export default {
  title: "Example/Loading",
  component: Loading,
  decorators: [
    (Story) => {
      return <div style={{margin: "3em"}}>{Story()}</div>;
    },
  ],
} as Meta;

export const Default: StoryObj = {};
