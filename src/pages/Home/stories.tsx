import { Meta, StoryObj } from "@storybook/react";

import { items as bannersMock } from "@/components/BannerSlider/mock";
import { items as gamesMock } from "@/components/GameCardSlider/mock";
import { item as highlightMock } from "@/components/Highlight/mock";

import Home from ".";

const props = {
  banners: bannersMock,
  newGames: gamesMock,
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  upcomingMoreGames: gamesMock,
  freeGames: gamesMock,
  freeHighlight: highlightMock,
};

export default {
  title: "pages/Home",
  component: Home,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
  args: { ...props },
} as Meta;

export const Default: StoryObj = {};
