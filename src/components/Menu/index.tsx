"use client";

import { useState } from "react";
import { MdOutlineShoppingCart as ShoppingCartIcon } from "react-icons/md";
import { GrSearch as SearchIcon } from "react-icons/gr";
import { RiMenu2Fill as MenuIcon } from "react-icons/ri";
import { MdOutlineClose as CloseIcon } from "react-icons/md";

import MediaMatch from "../MediaMatch";
import LinkButton from "../LinkButton";
import Logo from "../Logo";
import * as S from "./styles";
import Link from "next/link";

type MenuProps = {
  username?: string;
};

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/" passHref>
          <Logo hideOnMobile />
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav className="MenuNav">
          <S.MenuLink className="MenuLink" href="/">
            Home
          </S.MenuLink>
          <S.MenuLink className="MenuLink" href="#">
            Explore
          </S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Open Shopping Cart" />
        </S.IconWrapper>

        {!username && (
          <MediaMatch greaterThan="medium">
            <LinkButton href="/sign-in">Sign in</LinkButton>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav className="MenuNav">
          <S.MenuLink className="MenuLink" href="/">
            Home
          </S.MenuLink>
          <S.MenuLink className="MenuLink" href="#">
            Explore
          </S.MenuLink>

          {!!username && (
            <>
              <S.MenuLink className="MenuLink" href="#">
                My Account
              </S.MenuLink>
              <S.MenuLink className="MenuLink" href="#">
                Whish List
              </S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox className="RegisterBox">
            <LinkButton href="/sign-in" fullWidth size="large">
              Sign in
            </LinkButton>
            <span>or</span>

            <S.CreateAccount href="/sign-up" title="Sign Up">
              Sign Up
            </S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  );
};

export default Menu;
