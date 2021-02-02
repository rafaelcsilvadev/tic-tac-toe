import React from "react";
import { SelectOneSC } from "./styles";

export function SelectOne(props) {
  const arrayOptions = [...props.options];

  return (
    <SelectOneSC
      value={props.value}
      onChange={props.onChange}
      className={props.className}
      margin={props.margin}
    >
      {arrayOptions.map((e, index) =>
        index === 0 ? (
          <option key={index} value={e.value} defaultValue>
            {e.text}
          </option>
        ) : (
          <option key={index} value={e.value}>
            {e.text}
          </option>
        )
      )}
    </SelectOneSC>
  );
}
