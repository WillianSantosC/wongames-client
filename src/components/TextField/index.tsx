"use client";

import { useState, InputHTMLAttributes } from "react";

import * as S from "./styles";

export type TextFieldProps = {
  onInput?: (value: string) => void;
  label?: string;
  labelFor?: string;
  initialValue?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  icon,
  iconPosition = "left",
  label,
  labelFor = "",
  initialValue = "",
  error,
  disabled = false,
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);
    if (onInput) {
      onInput(newValue);
    }
  };

  return (
    <S.Wrapper className="TextFieldWrapper" disabled={disabled} error={!!error}>
      {!!label && (
        <S.Label className="Label" htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
      <S.InputWrapper className="InputWrapper">
        {!!icon && (
          <S.Icon className="Icon" iconPosition={iconPosition}>
            {icon}
          </S.Icon>
        )}
        <S.Input
          className="Input"
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          {...props}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};

export default TextField;
