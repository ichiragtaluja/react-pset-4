import { useState } from "react";

export function Welcome() {
  const [fontSize, setFontSize] = useState(18);

  const buttonHandler = (event) => {
    const operator = event.target.value;

    setFontSize((fontSize) => {
      return operator === "+" ? fontSize + 1 : fontSize - 1;
    });
  };

  return (
    <>
      <h1>Question 2</h1>
      <p style={{ fontSize: `${fontSize}px` }}>Welcome</p>
      <button value={"+"} onClick={buttonHandler}>
        +
      </button>
      <button value={"-"} onClick={buttonHandler}>
        -
      </button>
    </>
  );
}
