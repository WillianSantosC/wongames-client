import { Meta, StoryObj } from "@storybook/react";

import GameDetails, { GameDetailsProps } from ".";
import { item as mockGame } from "./mock";

export default {
  title: "components/GameDetails",
  component: GameDetails,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
  args: mockGame,
  argTypes: {
    releaseDate: {
      control: "date",
    },
    platforms: {
      control: {
        type: "inline-check",
        options: ["windows", "linux", "mac"],
      },
    },
    genres: {
      control: {
        type: "inline-check",
        options: ["Role-playing", "Narrative"],
      },
    },
  },
} as Meta;

export const Default: StoryObj<GameDetailsProps> = {
  render: (args) => (
    <div style={{ maxWidth: "90rem", margin: "0 auto" }}>
      <GameDetails {...args} />
    </div>
  ),
};
