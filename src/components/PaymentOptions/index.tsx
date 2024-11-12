"use client";

import { MouseEvent, useState } from "react";
import { MdOutlineAddShoppingCart, MdAdd } from "react-icons/md";
import Image from "next/image";

import Button from "../Button";
import LinkButton from "../LinkButton";
import Heading from "../Heading";
import Radio from "../Radio";

import * as S from "./styles";

export type PaymentOptionsProps = {
  cards?: PaymentCard[];
  handlePayment: () => (event: MouseEvent<HTMLButtonElement>) => void;
};

export type PaymentCard = {
  number: string;
  flag: string;
  img: string;
};

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" size="small" lineBottom>
          Payment
        </Heading>

        <S.CardsList>
          {cards?.map((card) => (
            <S.CardItem key={card.number}>
              <S.CardInfo>
                <Image src={card.img} alt={card.flag} width={60} height={40} />
                {card.number}
              </S.CardInfo>
              <Radio
                name="credit-card"
                id={card.number}
                value={card.number}
                onCheck={() => setChecked(true)}
              />
            </S.CardItem>
          ))}

          <S.AddCard role="button">
            <MdAdd size={14} /> Add a new credit card
          </S.AddCard>
        </S.CardsList>
      </S.Body>
      <S.Footer>
        <LinkButton fullWidth minimal>
          Continue shopping
        </LinkButton>
        <Button
          fullWidth
          icon={<MdOutlineAddShoppingCart />}
          onClick={handlePayment}
          disabled={!checked}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  );
};

export default PaymentOptions;
