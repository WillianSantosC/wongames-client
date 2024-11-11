import LinkButton from "../LinkButton";
import * as S from "./styles";

export type EmptyProps = {
  title: string;
  description: string;
  hasLink?: boolean;
};

const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <S.Wrapper>
    <S.Image
      src="/img/empty.svg"
      alt="A gamer in a couch playing videogame"
      role="image"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    {hasLink && <LinkButton href="/">Go back to store</LinkButton>}
  </S.Wrapper>
);
export default Empty;
