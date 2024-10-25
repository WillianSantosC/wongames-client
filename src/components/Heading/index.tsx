import * as S from "./styles";

export type HeadingProps = {
  children: React.ReactNode;
  color?: "white" | "black";
  size?: "small" | "medium";
  lineColor?: "primary" | "secondary";
  lineLeft?: boolean;
  lineBottom?: boolean;
};

const Heading = ({
  children,
  color = "black",
  size = "medium",
  lineColor = "primary",
  lineLeft = false,
  lineBottom = false,
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    size={size}
    lineColor={lineColor}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
  >
    {children}
  </S.Wrapper>
);

export default Heading;
