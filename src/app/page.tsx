import Home, { HomePageProps } from "@/pages/Home";

import { items as bannersMock } from "@/components/BannerSlider/mock";
import { items as gamesMock } from "@/components/GameCardSlider/mock";
import { item as highlightMock } from "@/components/Highlight/mock";

function getHomePageData() {
  const output = {
    banners: bannersMock,
    newGames: gamesMock,
    mostPopularHighlight: highlightMock,
    mostPopularGames: gamesMock,
    upcomingGames: gamesMock,
    upcomingHighlight: highlightMock,
    upcomingMoreGames: gamesMock,
    freeGames: gamesMock,
    freeHighlight: highlightMock,
  };

  return output;
}

export default function Index() {
  const props: HomePageProps = getHomePageData();

  return <Home {...props} />;
}
