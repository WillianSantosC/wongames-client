import {
  MdOutlineAccountCircle,
  MdFavoriteBorder,
  MdExitToApp,
} from "react-icons/md";

import { GoChevronDown } from "react-icons/go";

import Dropdown from "../Dropdown";

import * as S from "./styles";

export type UserDropdownProps = {
  username: string;
};

const UserDropdown = ({ username }: UserDropdownProps) => (
  <Dropdown
    title={
      <>
        <MdOutlineAccountCircle size={24} />
        <S.Username>{username}</S.Username>
        <GoChevronDown size={18} />
      </>
    }
  >
    <S.Nav>
      <S.Link href="/profile/me">
        <MdOutlineAccountCircle />
        <span>My profile</span>
      </S.Link>

      <S.Link href="/wishlist" title="Wishlist">
        <MdFavoriteBorder />
        <span>Wishlist</span>
      </S.Link>

      <S.Link href="/logout" title="Sign out">
        <MdExitToApp />
        <span>Sign out</span>
      </S.Link>
    </S.Nav>
  </Dropdown>
);

export default UserDropdown;
