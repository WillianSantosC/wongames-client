import { Meta, StoryObj } from "@storybook/react";

import Gallery, { GalleryProps } from ".";
import { items } from "./mock";

export default {
  title: "components/Gallery",
  component: Gallery,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
  args: { items },
} as Meta;

export const Default: StoryObj<GalleryProps> = {
  render: (args) => (
    <div style={{ maxWidth: "90rem", margin: "0 auto" }}>
      <Gallery {...args} />
    </div>
  ),
};
