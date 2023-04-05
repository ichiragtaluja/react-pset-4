import { useState } from "react";

// function IndividualItem({ id, task, isDone }) {
//   return (
//   );
// }
export function ToDoList({ todoItems }) {
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
