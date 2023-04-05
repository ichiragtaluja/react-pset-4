import { useState } from "react";

export function IndividualItem({ id, task, isDone }) {
  const [markDone, setMarkDone] = useState(false);
  const buttonHandler = () => {
    setMarkDone(!markDone);
  };
  return (
    <li
      style={{
        color: markDone ? "red" : "",
        textDecoration: markDone ? "line-through" : "",
      }}
      key={id}
    >
      {task}
      <button onClick={buttonHandler}>Mark As Done</button>
    </li>
  );
}
