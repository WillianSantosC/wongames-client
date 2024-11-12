import Cart, { CartProps } from "@/pages/Cart";

import { item as itemsMock } from "@/components/CartList/mock";
import { items as gamesMock } from "@/components/GameCardSlider/mock";
import { item as highlightMock } from "@/components/Highlight/mock";
import { item as cardsMock } from "@/components/PaymentOptions/mock";

function getCartPageData() {
  const output = {
    items: itemsMock,
    total: "$ 430,00",
    cards: cardsMock,
    recommendedGames: gamesMock,
    recommendedHighlight: highlightMock,
  };

  return output;
}

export default function CartPage() {
  const props: CartProps = getCartPageData();

  return <Cart {...props} />;
}
