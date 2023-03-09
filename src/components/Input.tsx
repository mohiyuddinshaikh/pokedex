import React, { useState } from "react";
import { ListItem } from "../App";

interface Props {
  addToList: (item: ListItem) => void;
}

export const Input: React.FC<Props> = ({ addToList }) => {
  const [text, setText] = useState<string>("");

  const handleClick = () => {
    addToList({
      name: text,
      isCompleted: false,
    });
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};
