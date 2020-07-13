import React from "react";
import classnames from "classnames";

interface Props {
  state: string;
}

export default function ArrowUp({ state }: Props) {
  return (
    <div
      className={classnames("triangle-up", {
        "triangle-up-active": state === "up",
      })}
    />
  );
}
