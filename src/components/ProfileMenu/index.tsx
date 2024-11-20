// import Link from "next/link";
import {
  MdOutlineAccountCircle,
  MdCreditCard,
  MdExitToApp,
  MdFormatListBulleted,
} from "react-icons/md";

import * as S from "./styles";

export type ProfileMenuProps = {
  activeLink?: "/profile/me" | "/profile/cards" | "/profile/orders" | string;
};

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <S.Nav>
    <S.Link
      isActive={activeLink === "/profile/me"}
      title="My profile"
      href="/profile/me"
    >
      <MdOutlineAccountCircle size={24} />
      <span>My profile</span>
    </S.Link>

    <S.Link
      isActive={activeLink === "/profile/cards"}
      title="My cards"
      href="/profile/cards"
    >
      <MdCreditCard size={24} />
      <span>My cards</span>
    </S.Link>

    <S.Link
      isActive={activeLink === "/profile/orders"}
      title="My orders"
      href="/profile/orders"
    >
      <MdFormatListBulleted size={24} />
      <span>My orders</span>
    </S.Link>

    <S.Link href="/logout">
      <MdExitToApp size={24} />
      <span>Sign out</span>
    </S.Link>
  </S.Nav>
);

export default ProfileMenu;
