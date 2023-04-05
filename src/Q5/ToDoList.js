import { IndividualItem } from "./IndividualItem";

export function TodoList({ todoItems }) {
  return (
    <>
      <h1>Question 5</h1>
      <ul>
        {todoItems.map(({ id, task, isDone }) => (
          <IndividualItem id={id} task={task} isDone={isDone} />
        ))}
      </ul>
    </>
  );
}
