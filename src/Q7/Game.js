import { useState } from "react";

export function Game() {
  const [count, setCount] = useState(5);

  const clickHandler = () => {
    if (count) {
      setCount((prev) => prev - 1);
    } else {
      setCount(5);
    }
  };
  return (
    <>
      <h1>Question 7</h1>
      <p>Current Lives: {count}</p>
      <button onClick={clickHandler}>
        {count ? "Lose A Life" : "Play Again"}{" "}
      </button>
      {!count && <p>Game Over!</p>}
    </>
  );
}
