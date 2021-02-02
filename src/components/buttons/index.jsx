import React from "react";
import { ButtonOneSC, ButtonTicTacToeSC } from "./styles";

export function ButtonOne(props) {
  return (
    <ButtonOneSC
      onClick={props.onClick}
      className={props.className}
      aria-label={props.ariaLabel}
      margin={props.margin}
    >
      {props.text}
    </ButtonOneSC>
  );
}

export function ButtonTicTacToe(props) {
  return (
    <ButtonTicTacToeSC
      onClick={props.onClick}
      className={props.className}
      aria-label={props.ariaLabel}
      margin={props.margin}
    >
      {props.text}
    </ButtonTicTacToeSC>
  );
}
