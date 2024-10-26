import LinkButton from "../LinkButton";

import * as S from "./styles";

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
};

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
}: BannerProps) => (
  <S.Wrapper>
    <S.Image src={img} role="img" aria-label={title} />
    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <LinkButton href={buttonLink} size="large">
        {buttonLabel}
      </LinkButton>
    </S.Caption>
  </S.Wrapper>
);
export default Banner;
