import * as React from "react";

interface ArrowUpProps {
  state: string;
}

const ArrowUp: React.SFC<ArrowUpProps> = ({ state }) => {
  const active: string = state === "up" ? "-active" : "";
  const triangleClass: string = "triangle-up" + active;
  return (
    <React.Fragment>
      <div className={triangleClass}></div>
    </React.Fragment>
  );
};

export default ArrowUp;
