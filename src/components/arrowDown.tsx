import React from "react";
import classnames from "classnames";

type Props = {
  state: string;
};

export default function ArrowDown({ state }: Props) {
  return (
    <>
      <div
        className={classnames("triangle-down", {
          "triangle-down-active": state === "down",
        })}
      />
    </>
  );
}
