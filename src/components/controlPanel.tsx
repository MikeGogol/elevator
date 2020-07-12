import * as React from "react";
import ControlItem from "./controlItem";

interface ControlPanelProps {
  items: Array<Number>;
  onItemSelect: Function;
}

const ControlPanel: React.SFC<ControlPanelProps> = ({
  items,
  onItemSelect,
}) => {
  return (
    <div className="con-area">
      {items.map((item: any) => (
        <ControlItem key={item} item={item} onItemSelect={onItemSelect} />
      ))}
    </div>
  );
};

export default ControlPanel;
