import React from "react";
import ControlItem from "./ControlItem";

type Props = {
  items: Array<number>;
  onItemSelect: (item: number) => void;
};

export default function ControlPanel({ items, onItemSelect }: Props) {
  return (
    <div className="con-area">
      {items.map((item) => (
        <ControlItem key={item} item={item} onItemSelect={onItemSelect} />
      ))}
    </div>
  );
}
