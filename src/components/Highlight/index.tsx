import LinkButton from "../LinkButton";

import * as S from "./styles";

export type HighlightProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  floatImage?: string;
  buttonLabel: string;
  buttonLink: string;
  alignment?: "right" | "left";
};

const Highlight = ({
  title,
  subtitle,
  backgroundImage,
  floatImage,
  buttonLabel,
  buttonLink,
  alignment = "right",
}: HighlightProps) => (
  <S.Wrapper
    alignment={alignment}
    style={{
      backgroundImage: `url(${backgroundImage})`,
    }}
  >
    {!!floatImage && (
      <S.FloatImage className="FloatImage" src={floatImage} alt={title} />
    )}
    <S.Content className="Content">
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
      <LinkButton href={buttonLink}>{buttonLabel}</LinkButton>
    </S.Content>
  </S.Wrapper>
);

export default Highlight;
