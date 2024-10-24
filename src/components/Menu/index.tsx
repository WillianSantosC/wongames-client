import { useState } from "react";
import { MdOutlineShoppingCart as ShoppingCartIcon } from "react-icons/md";
import { GrSearch as SearchIcon } from "react-icons/gr";
import { RiMenu2Fill as MenuIcon } from "react-icons/ri";
import { MdOutlineClose as CloseIcon } from "react-icons/md";
import Button from "../Button";

import Logo from "../Logo";
import * as S from "./styles";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <S.IconWrapper onClick={() => setIsOpen(true)}>
        <MenuIcon aria-label="Open Menu" />
      </S.IconWrapper>

      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Open Shopping Cart" />
        </S.IconWrapper>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav className="MenuNav">
          <S.MenuLink className="MenuLink" href="#">
            Home
          </S.MenuLink>
          <S.MenuLink className="MenuLink" href="#">
            Explore
          </S.MenuLink>
        </S.MenuNav>

        <S.RegisterBox className="RegisterBox">
          <Button fullWidth size="large">
            Log in now
          </Button>
          <span>or</span>
          <S.CreateAccount href="#" title="Sign Up">
            Sign Up
          </S.CreateAccount>
        </S.RegisterBox>
      </S.MenuFull>
    </S.Wrapper>
  );
};

export default Menu;
