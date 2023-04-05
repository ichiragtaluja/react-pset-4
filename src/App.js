import logo from "./logo.svg";
import "./App.css";
import { characters } from "./Q1/characters";
import { Tab } from "./Q1/Tab";
import { Welcome } from "./Q2/Welcome";
import { useState } from "react";

const itemList = [
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 2, name: "Carrot", category: "Vegetable" },
  { id: 3, name: "Banana", category: "Fruit" },
  { id: 4, name: "Broccoli", category: "Vegetable" },
];
function DisplayFood({ food }) {
  const [foodSelected, setFoodSelected] = useState();

  const buttonHandler = (event) => {
    const selectedFood = event.target.value;
    console.log(selectedFood);
    setFoodSelected(() => selectedFood);
  };

  const displayFoodList = foodSelected
    ? food.filter((item) => item.category === foodSelected)
    : food;
  console.log(displayFoodList);
  return (
    <>
      <h1>Question 3</h1>
      <button value={undefined} onClick={buttonHandler}>
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
          <h3>{name}</h3>
          <p>{category}</p>
        </div>
      ))}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Tab characters={characters} />
      <Welcome />
      <DisplayFood food={itemList} />
    </div>
  );
}

export default App;
