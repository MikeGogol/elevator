import * as React from "react";

import ArrowDown from "./arrowDown";
import ArrowUp from "./arrowUp";
const Pulse = require("react-reveal/Pulse");

type Props = {
  id: string;
  floor: number;
  state: string;
};

export default function Elevator({ id, floor, state }: Props) {
  return (
    <div className="elv-item">
      <ArrowUp state={state} />
      <Pulse spy={floor}>
        <h1>{floor}</h1>
      </Pulse>
      <ArrowDown state={state} />
    </div>
  );
}
