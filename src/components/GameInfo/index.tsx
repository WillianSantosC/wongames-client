import { MdOutlineAddShoppingCart, MdFavoriteBorder } from "react-icons/md";

import Button from "../Button";
import Heading from "../Heading";
import Ribbon from "../Ribbon";

import * as S from "./styles";

export type GameInfoProps = {
  title: string;
  description: string;
  price: string;
};

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>

    <Ribbon color="secondary">{`$${price}`}</Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <Button icon={<MdOutlineAddShoppingCart />} size="large">
        Add to cart
      </Button>
      <Button icon={<MdFavoriteBorder />} size="large" minimal>
        Wishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
);

export default GameInfo;
