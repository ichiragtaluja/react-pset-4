import { useState } from "react";

export function DisplayFood({ food }) {
  const [foodSelected, setFoodSelected] = useState();

  const buttonHandler = (event) => {
    const selectedFood = event.target.value;
    // console.log(typeof selectedFood);
    setFoodSelected(selectedFood);
  };

  let displayFoodList;

  if (foodSelected) {
    displayFoodList = food.filter((item) => item.category === foodSelected);
  } else {
    displayFoodList = food;
  }
  // console.log(displayFoodList);
  return (
    <>
      <h1>Question 3</h1>
      <button value={""} onClick={buttonHandler}>
        All
      </button>
      <button value="Fruit" onClick={buttonHandler}>
        Fruits
      </button>
      <button value="Vegetable" onClick={buttonHandler}>
        Vegetables
      </button>
      {displayFoodList.map(({ id, name, category }) => (
        <div key={id}>
          <h3
            style={{ color: category === "Vegetable" ? "green" : "orange" }}
          >
            {name}
          </h3>
          <p>{category}</p>
        </div>
      ))}
    </>
  );
}
