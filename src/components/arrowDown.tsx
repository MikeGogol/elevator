import * as React from "react";

interface ArrowDownProps {
  state: string;
}

const ArrowDown: React.SFC<ArrowDownProps> = ({ state }) => {
  const active: string = state === "down" ? "-active" : "";
  const triangleClass: string = "triangle-down" + active;
  return (
    <React.Fragment>
      <div className={triangleClass}></div>
    </React.Fragment>
  );
};

export default ArrowDown;
