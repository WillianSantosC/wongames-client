import { Meta, StoryObj } from "@storybook/react";

import GameInfo, { GameInfoProps } from ".";
import { item as mockGame } from "./mock";

export default {
  title: "components/GameInfo",
  component: GameInfo,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
  args: mockGame,
} as Meta;

export const Default: StoryObj<GameInfoProps> = {
  render: (args) => (
    <div style={{ maxWidth: "90rem", margin: "auto", padding: "1.5rem" }}>
      <GameInfo {...args} />
    </div>
  ),
};
