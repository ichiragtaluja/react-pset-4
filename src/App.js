import logo from "./logo.svg";
import "./App.css";
import { characters } from "./Q1/characters";
import { Tab } from "./Q1/Tab";
import { Welcome } from "./Q2/Welcome";
import { DisplayFood } from "./Q3/DisplayFood";
import { itemList } from "./Q3/itemList";
import { todoItems } from "./Q4/todoItems";
import { ToDoList } from "./Q4/ToDoList";
import { todoItems1 } from "./Q5/todoItems1";
import { TodoList } from "./Q5/ToDoList";
import { books } from "./Q6/books";
import { DisplayBooks } from "./Q6/DisplayBooks";
import { Game } from "./Q7/Game";

function App() {
  return (
    <div className="App">
      <Tab characters={characters} />
      <Welcome />
      <DisplayFood food={itemList} />
      <ToDoList todoItems={todoItems} />
      <TodoList todoItems={todoItems1} />
      <DisplayBooks books={books} />
      <Game />
    </div>
  );
}

export default App;
