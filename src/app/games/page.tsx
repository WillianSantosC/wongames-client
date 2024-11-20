import GamesTemplate, { GamesTemplateProps } from "@/pages/Games";
import { items as filterItemsMock } from "@/components/ExploreSidebar/mock";
import { items as gamesMock } from "@/components/GameCardSlider/mock";

function getGamesPageData() {
  const output = { games: gamesMock, filterItems: filterItemsMock };

  return output;
}

export default function GamesPage() {
  const props: GamesTemplateProps = getGamesPageData();

  return <GamesTemplate {...props} />;
}
