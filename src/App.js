import logo from "./logo.svg";
import "./App.css";
import { characters } from "./Q1/characters";
import { Tab } from "./Q1/Tab";
import { Welcome } from "./Q2/Welcome";
import { DisplayFood } from "./Q3/DisplayFood";
import { itemList } from "./Q3/itemList";
import { useState } from "react";

const todoItems = [
  { id: 1, task: "Writing 1-page poem", isDone: true },
  { id: 2, task: "Gym", isDone: false },
  { id: 3, task: "Shopping", isDone: false },
  { id: 4, task: "Standup call", isDone: true },
];

// function IndividualItem({ id, task, isDone }) {

//   return (

//   );
// }

function ToDoList({ todoItems }) {
  const [displayList, setDisplayList] = useState(todoItems);

  const buttonHandler = (index) => {
    const newArr = displayList.filter(
      (item) => displayList.indexOf(item) !== index
    );
    setDisplayList(newArr);
  };

  return (
    <>
      <h1>Question 4</h1>
      <ul>
        {displayList.map(({ id, task, isDone }, index) => (
          <li key={id} style={{ textDecoration: isDone ? "line-through" : "" }}>
            {task}
            <button onClick={() => buttonHandler(index)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Tab characters={characters} />
      <Welcome />
      <DisplayFood food={itemList} />
      <ToDoList todoItems={todoItems} />
    </div>
  );
}

export default App;
