import Wishlist, { WishlistTemplateProps } from "@/pages/Wishlist";

import { items as gamesMock } from "@/components/GameCardSlider/mock";
import { item as highlightMock } from "@/components/Highlight/mock";

function getWishlistPageData() {
  const output = {
    games: gamesMock,
    recommendedGames: gamesMock.slice(0, 5),
    recommendedHighlight: highlightMock,
  };

  return output;
}

export default function WishlistPage() {
  const props: WishlistTemplateProps = getWishlistPageData();

  return <Wishlist {...props} />;
}
