import React from "react";
import { MessageSC, BlockMessageSC } from "./styles";

export function ErrorMessage(props) {
  return (
    <>
      <BlockMessageSC>
        <MessageSC display={props.display}>{props.text}</MessageSC>
      </BlockMessageSC>
    </>
  );
}
