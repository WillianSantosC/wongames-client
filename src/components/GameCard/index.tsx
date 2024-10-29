import { MdOutlineAddShoppingCart as ShoppingCartIcon } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

import Image from "next/image";

import Button from "../Button";
import * as S from "./styles";

export type GameCardProps = {
  title: string;
  developer: string;
  img: string;
  price: string;
  promotionalPrice?: string;
};

const GameCard = ({
  title,
  developer,
  img,
  price,
  promotionalPrice,
}: GameCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <Image width="100" height="100" objectFit="cover" src={img} alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.Info>
      <S.FavButton role="button">
        <MdFavoriteBorder aria-label="Add to Wishlist" />
      </S.FavButton>
      <S.BuyBox>
        {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
        <S.Price isPromotional={!price}>{promotionalPrice || price}</S.Price>
        <Button icon={<ShoppingCartIcon />} size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
);
export default GameCard;
