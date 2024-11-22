import LinkButton from "../LinkButton";
import GameItem, { GameItemProps } from "../GameItem";

import * as S from "./styles";

export type CartListProps = {
  items: GameItemProps[];
  total: string;
  hasButton?: boolean;
};

const CartList = ({ items, total, hasButton = false }: CartListProps) => (
  <S.Wrapper className="CartListWrapper">
    {items?.map((item) => <GameItem key={item.title} {...item} />)}

    <S.Footer>
      {!hasButton && <span>Total:</span>}
      <S.Total>{total}</S.Total>

      {hasButton && <LinkButton href="/cart">Buy it now</LinkButton>}
    </S.Footer>
  </S.Wrapper>
);

export default CartList;
