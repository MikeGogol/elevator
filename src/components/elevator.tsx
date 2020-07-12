import * as React from "react";

import ArrowDown from "./arrowDown";
import ArrowUp from "./arrowUp";
const Pulse = require("react-reveal/Pulse");

interface ElevatorProps {
  id: string;
  floor: number;
  state: string;
}

export const Elevator: React.FC<ElevatorProps> = ({ id, floor, state }) => (
  <div className="elv-item">
    <ArrowUp state={state} />
    <Pulse spy={floor}>
      <h1>{floor}</h1>
    </Pulse>
    <ArrowDown state={state} />
  </div>
);
