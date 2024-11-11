import { Meta, StoryObj } from "@storybook/react";

import { items as gamesMock } from "@/components/GameCardSlider/mock";
import { item as highlightMock } from "@/components/Highlight/mock";

import Wishlist, { WishlistTemplateProps } from ".";

const items = {
  games: gamesMock,
  recommendedGames: gamesMock.slice(0, 5),
  recommendedHighlight: highlightMock,
};

export default {
  title: "pages/Wishlist",
  component: Wishlist,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
  args: { ...items },
} as Meta;

export const Default: StoryObj<WishlistTemplateProps> = {};
