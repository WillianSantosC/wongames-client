import { Meta, StoryObj } from "@storybook/react";

import CartList, { CartListProps } from ".";
import { item as mockItems } from "./mock";

export default {
  title: "components/CartList",
  component: CartList,
  args: {
    items: mockItems,
    total: "R$ 330,00",
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta;

export const Default: StoryObj<CartListProps> = {
  render: (args) => (
    <div style={{ maxWidth: 800 }}>
      <CartList {...args} />
    </div>
  ),
};

export const WithButton: StoryObj<CartListProps> = {
  render: (args) => (
    <div style={{ maxWidth: 800 }}>
      <CartList {...args} hasButton />
    </div>
  ),
};

export const Empty: StoryObj<CartListProps> = {
  render: () => (
    <div style={{ maxWidth: 800 }}>
      <CartList />
    </div>
  ),
};
