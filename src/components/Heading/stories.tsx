import { Meta, StoryObj } from "@storybook/react";

import Heading from ".";

export default {
  title: "components/Heading",
  component: Heading,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Default: StoryObj = {
  argTypes: {
    children: {
      type: "string",
    },
  },
  args: {
    chilren: "Most Populars",
  },
};
