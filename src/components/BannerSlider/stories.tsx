import { Meta, StoryObj } from "@storybook/react";

import BannerSlider, { BannerSliderProps } from ".";

export default {
  title: "components/BannerSlider",
  component: BannerSlider,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

const items = [
  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1401730/library_hero.jpg?t=1727882365",
    title: "Defy death 1",
    subtitle: "<p>Play the new <strong>CrashLands</strong> season",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death",
    ribbon: "Bestselling",
  },
  {
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1401730/ss_2149a390d3e56b3d46321d2d4719a74981014702.1920x1080.jpg?t=1729886097",
    title: "Defy death 2",
    subtitle: "<p>Play the new <strong>CrashLands</strong> season",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death",
  },
  {
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1401730/ss_29a23396b7da00561e27bf48372f74075969bcf4.1920x1080.jpg?t=1729886097",
    title: "Defy death 3",
    subtitle: "<p>Play the new <strong>CrashLands</strong> season",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death",
  },
];

export const Default: StoryObj<BannerSliderProps> = {
  args: { items },
  render: (args) => (
    <div style={{ maxWidth: "90rem", margin: "0 auto" }}>
      <BannerSlider {...args} />
    </div>
  ),
};
