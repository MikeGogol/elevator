import * as React from "react";

interface Props {
  item: number;
  onItemSelect: (item: number) => void;
}

export default function ControlItem({ item, onItemSelect }: Props) {
  return (
    <div className="con-item" onClick={() => onItemSelect(item)}>
      {item}
    </div>
  );
}
