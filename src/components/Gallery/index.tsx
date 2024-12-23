/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useRef } from "react";
import { MdOutlineClose as CloseIcon } from "react-icons/md";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import SlickSlider from "react-slick";

import Slider, { SliderSettings } from "../Slider";

import * as S from "./styles";

const commonSettings: SliderSettings = {
  infinite: false,
  lazyLoad: "ondemand",
  arrows: true,
  nextArrow: <IoIosArrowDropright aria-label="next image" />,
  prevArrow: <IoIosArrowDropleft aria-label="previous image" />,
};

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true,
      },
    },
  ],
};

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1.1,
};

export type GalleryImageProps = {
  src: string;
  label: string;
};

export type GalleryProps = {
  items: GalleryImageProps[];
};

const Gallery = ({ items }: GalleryProps) => {
  const slider = useRef<SlickSlider>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      if (key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, []);

  return (
    <S.Wrapper>
      <Slider ref={slider} settings={settings}>
        {items.map((item, index) => (
          <img
            role="button"
            key={`thumb-${index}`}
            src={item.src}
            alt={`Thumb - ${item.label}`}
            onClick={() => {
              setIsOpen(true);
              slider.current!.slickGoTo(index, true);
            }}
          />
        ))}
      </Slider>

      <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
        >
          <CloseIcon size={40} />
        </S.Close>

        <S.Content>
          <Slider ref={slider} settings={modalSettings}>
            {items.map((item, index) => (
              <img key={`gallery-${index}`} src={item.src} alt={item.label} />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  );
};

export default Gallery;
