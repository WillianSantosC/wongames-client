import Base from "../Base";

import GameInfo, { GameInfoProps } from "@/components/GameInfo";

import * as S from "./styles";

export type GameTemplateProps = {
  cover: string;
  gameInfo: GameInfoProps;
};

const Game = ({ cover, gameInfo }: GameTemplateProps) => (
  <Base>
    <S.Cover
      style={{
        backgroundImage: `url(${cover})`,
      }}
      role="image"
      aria-label="cover"
    />

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>
    </S.Main>
  </Base>
);

export default Game;
