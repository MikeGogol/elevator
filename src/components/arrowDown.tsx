import * as React from "react";

type Props = {
  state: string;
};

export default function ArrowDown({ state }: Props) {
  const active: string = state === "down" ? "-active" : "";
  const triangleClass: string = "triangle-down" + active;
  return (
    <React.Fragment>
      <div className={triangleClass}></div>
    </React.Fragment>
  );
}
