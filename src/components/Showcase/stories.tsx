import { Meta, StoryObj } from "@storybook/react";

import Showcase, { ShowcaseProps } from ".";

import { item as highlightMock } from "../Highlight/mock";
import { items as gamesMock } from "../GameCardSlider/mock";

export default {
  title: "components/Showcase",
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta;

export const Default: StoryObj<ShowcaseProps> = {
  args: { title: "Most Popular", highlight: highlightMock, games: gamesMock },
  render: (args) => <Showcase {...args} />,
};

export const WithoutHighlight: StoryObj<ShowcaseProps> = {
  args: { title: "Most Popular", games: gamesMock },
  render: (args) => <Showcase {...args} />,
};

export const WithoutGames: StoryObj<ShowcaseProps> = {
  args: { title: "Most Popular", highlight: highlightMock },
  render: (args) => <Showcase {...args} />,
};
