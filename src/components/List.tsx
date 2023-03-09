import React from "react";
import { ListItem } from "../App";

interface Props {
  list: ListItem[];
  markComplete: (itemName: string) => void;
}

export const List: React.FC<Props> = ({ list, markComplete }) => {
  const handleComplete = (itemName: string) => {
    markComplete(itemName);
  };

  return (
    <div>
      {list?.map((item) => (
        <div
          style={{
            display: "block",
            textDecoration: item?.isCompleted ? "line-through" : "none",
          }}
        >
          <input
            type="checkbox"
            checked={item?.isCompleted}
            onChange={() => handleComplete(item?.name)}
            disabled={item?.isCompleted}
          />
          {item.name}
        </div>
      ))}
    </div>
  );
};
