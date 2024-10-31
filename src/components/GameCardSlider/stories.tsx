import { Meta, StoryObj } from "@storybook/react";

import GameCardSlider, { GameCardSliderProps } from ".";
import { items } from "./mock";

export default {
  title: "components/GamerCardSlider",
  component: GameCardSlider,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta;

export const Default: StoryObj<GameCardSliderProps> = {
  args: { items },
  render: (args) => (
    <div style={{ maxWidth: "90rem", margin: "0 auto" }}>
      <GameCardSlider {...args} />
    </div>
  ),
};
