import { MdOutlineAddShoppingCart as ShoppingCartIcon } from "react-icons/md";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import Image from "next/image";

import Ribbon, { RibbonColors, RibbonSizes } from "../Ribbon";
import Button from "../Button";
import * as S from "./styles";

export type GameCardProps = {
  title: string;
  developer: string;
  img: string;
  price: string;
  promotionalPrice?: string;
  favorite?: boolean;
  ribbon?: React.ReactNode;
  ribbonColor?: RibbonColors;
  ribbonSize?: RibbonSizes;
  onFav?: () => void;
};

const GameCard = ({
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  ribbon,
  ribbonColor = "primary",
  ribbonSize = "small",
  onFav,
}: GameCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <S.ImageBox>
      <Image width="100" height="100" objectFit="cover" src={img} alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.Info>
      <S.FavButton onClick={onFav} role="button">
        {favorite ? (
          <MdFavorite aria-label="Remove from Wishlist" />
        ) : (
          <MdFavoriteBorder aria-label="Add to Wishlist" />
        )}
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
