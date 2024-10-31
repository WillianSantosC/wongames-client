import { Meta, StoryObj } from "@storybook/react";

import Home from ".";

export default {
  title: "pages/Home",
  component: Home,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta;

export const Default: StoryObj = {};
