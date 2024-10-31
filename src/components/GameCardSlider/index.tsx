import Slider, { SliderSettings } from "../Slider";
import GameCard, { GameCardProps } from "../GameCard";

import * as S from "./styles";

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: "ondemand",
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
      },
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
      },
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1,
      },
    },
  ],
};

export type GameCardSliderProps = {
  items: GameCardProps[];
  color?: "white" | "black";
};

const GameCardSlider = ({ items, color = "white" }: GameCardSliderProps) => (
  <S.Wrapper className="GameCardSliderWrapper" color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <GameCard key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
);

export default GameCardSlider;
