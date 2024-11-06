import { Meta, StoryObj } from "@storybook/react";

import Game from ".";

export default {
  title: "pages/Game",
  component: Game,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta;

export const Default: StoryObj = {};
