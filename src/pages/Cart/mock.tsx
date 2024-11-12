import { item as itemsMock } from "@/components/CartList/mock";
import { items as gamesMock } from "@/components/GameCardSlider/mock";
import { item as highlightMock } from "@/components/Highlight/mock";
import { item as cardsMock } from "@/components/PaymentOptions/mock";

export const cartPageMock = {
  items: itemsMock,
  total: "$ 430,00",
  cards: cardsMock,
  recommendedGames: gamesMock,
  recommendedHighlight: highlightMock,
};
