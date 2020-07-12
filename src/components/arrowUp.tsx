import * as React from "react";

interface Props {
  state: string;
}

export default function ArrowUp({ state }: Props) {
  const active: string = state === "up" ? "-active" : "";
  const triangleClass: string = "triangle-up" + active;
  return (
    <React.Fragment>
      <div className={triangleClass}></div>
    </React.Fragment>
  );
}
