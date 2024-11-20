import CardsList, { CardsListProps } from "@/components/CardsList";
import Profile from "@/pages/Profile";
import { item as mockCards } from "@/components/PaymentOptions/mock";

function getProfileCardsData() {
  const output = { cards: mockCards };

  return output;
}

export default function ProfileCards() {
  const { cards }: CardsListProps = getProfileCardsData();

  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  );
}
