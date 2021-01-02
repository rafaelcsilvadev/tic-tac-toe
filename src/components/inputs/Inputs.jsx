import React from "react";
import { InputOneSC } from "./inputsStyles";

export function InputOne(props) {
  return (
    <InputOneSC
      id={props.id}
      name={props.name}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      maxLength={props.maxLength}
      minLength={props.minLength || 0}
      placeholder={props.placeholder}
      aria-label={props.ariaLabel}
      aria-required={props.ariaRequired}
      required={props.required || false}
      className={props.className}
      margin={props.margin}
    />
  );
}
