import { Meta, StoryObj } from "@storybook/react";

import Game, { GameTemplateProps } from ".";

import { item } from "./mock";

export default {
  title: "pages/Game",
  component: Game,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
  args: {
    ...item,
  },
} as Meta;

export const Default: StoryObj<GameTemplateProps> = {};
