import * as React from "react";

interface ControlItemProps {
  item: number;
  onItemSelect: Function;
}

const ControlItem: React.SFC<ControlItemProps> = ({ item, onItemSelect }) => {
  return (
    <div className="con-item" onClick={() => onItemSelect(item)}>
      {item}
    </div>
  );
};

export default ControlItem;
