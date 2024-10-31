import { Meta, StoryObj } from "@storybook/react";

import BannerSlider, { BannerSliderProps } from ".";
import { items } from "./mock";

export default {
  title: "components/BannerSlider",
  component: BannerSlider,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta;

export const Default: StoryObj<BannerSliderProps> = {
  args: { items },
  render: (args) => (
    <div style={{ maxWidth: "90rem", margin: "0 auto" }}>
      <BannerSlider {...args} />
    </div>
  ),
};
