import { Meta, StoryObj } from "@storybook/react";

import Base from ".";

export default {
  title: "pages/Base",
  component: Base,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta;

export const Default: StoryObj = {};
