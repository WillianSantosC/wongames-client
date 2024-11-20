import { Meta, StoryObj } from "@storybook/react";

import OrdersList, { OrdersListProps } from ".";

import { item as itemsMock } from "./mock";

export default {
  title: "components/OrdersList",
  component: OrdersList,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    items: itemsMock,
  },
} as Meta;

export const Default: StoryObj<OrdersListProps> = {
  render: (args) => (
    <div style={{ maxWidth: 850, margin: "auto" }}>
      <OrdersList {...args} />
    </div>
  ),
};
