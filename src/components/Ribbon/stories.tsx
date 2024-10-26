import { Meta, StoryObj } from "@storybook/react";

import Ribbon from ".";

export default {
  title: "components/Ribbon",
  component: Ribbon,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: "Best Seller",
  },
  argTypes: {
    children: {
      type: "string",
    },
  },
} as Meta;

export const Default: StoryObj = {
  render: (args) => (
    <div
      style={{
        width: "40rem",
        height: "25rem",
        position: "relative",
        backgroundColor: "#888",
      }}
    >
      <Ribbon {...args}>Best Seller</Ribbon>
    </div>
  ),
};
