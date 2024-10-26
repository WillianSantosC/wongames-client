import { Meta, StoryObj } from "@storybook/react";

import Banner, { BannerProps } from ".";

export default {
  title: "components/Banner",
  component: Banner,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    img: "https://cdn1.epicgames.com/1b8a504ec52d4430b65cca2990ad6c7f/offer/EGS_Crashlands_ButterscotchShenanigans_S1-2560x1440-2971f9f3be6e0b5b7e69818577240f54.jpg",
    title: "Defy death",
    subtitle: "<p>Play the new <strong>CrashLands</strong> season",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death",
  },
} as Meta;

export const Default: StoryObj<BannerProps> = {
  render: (args) => (
    <div style={{ maxWidth: "104rem", margin: "0 auto" }}>
      <Banner {...args} />
    </div>
  ),
};

export const WithRibbon: StoryObj<BannerProps> = {
  render: (args) => (
    <div style={{ maxWidth: "90rem", margin: "0 auto" }}>
      <Banner {...args} />
    </div>
  ),
};

WithRibbon.args = {
  ribbon: "20% OFF",
  ribbonSize: "normal",
  ribbonColor: "primary",
};
