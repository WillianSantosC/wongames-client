import { Meta, StoryObj } from "@storybook/react";

import Profile from ".";

export default {
  title: "pages/Profile",
  component: Profile,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta;

export const Default: StoryObj = {};
