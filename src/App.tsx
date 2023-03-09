import React, { useState } from "react";
import { Input } from "./components/Input";
import { List } from "./components/List";

export interface ListItem {
  name: string;
  isCompleted: boolean;
}

function App() {
  const [listItems, setListItems] = useState<ListItem[]>([]);

  const addToList = (item: ListItem) => {
    const tempList: ListItem[] = [...listItems];
    const doesExist = tempList.findIndex(
      (tempItem) => tempItem.name === item.name
    );
    if (doesExist !== -1) {
      alert("Already exists");
      return;
    }
    tempList.push(item);
    setListItems(tempList);
  };

  const markComplete = (itemName: string) => {
    const tempList: ListItem[] = [...listItems];
    const indexToComplete = tempList?.findIndex(
      (item) => item.name === itemName
    );
    tempList[indexToComplete].isCompleted = true;
    setListItems(tempList);
  };

  return (
    <div className="App">
      <Input addToList={addToList} />
      <List list={listItems} markComplete={markComplete} />
    </div>
  );
}

export default App;
