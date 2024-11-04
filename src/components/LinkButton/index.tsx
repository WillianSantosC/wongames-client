import { AnchorHTMLAttributes } from "react";

import * as S from "./styles";

type ButtonTypes = AnchorHTMLAttributes<HTMLAnchorElement>;

type LinkButtonProps = {
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  icon?: JSX.Element;
} & ButtonTypes;

const LinkButton = ({
  children,
  icon,
  size = "medium",
  fullWidth = false,
  href,
  ...props
}: LinkButtonProps) => (
  <S.Wrapper
    href={href}
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default LinkButton;
