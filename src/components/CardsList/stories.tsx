import { Meta, StoryObj } from "@storybook/react";

import CardsList, { CardsListProps } from ".";

import { item as cardsMock } from "../PaymentOptions/mock";

export default {
  title: "components/CardsList",
  component: CardsList,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    cards: cardsMock,
  },
} as Meta;

export const Default: StoryObj<CardsListProps> = {
  render: (args) => (
    <div style={{ maxWidth: 850, margin: "auto" }}>
      <CardsList {...args} />
    </div>
  ),
};
