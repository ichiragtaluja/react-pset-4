import { useState } from "react";

export function Tab({ characters }) {
  const [selectedCharacters, setSelectedCharacters] = useState();

  const buttonHandler = (event) => {
    const characterSelected = event.target.value;
    console.log(characterSelected);
    setSelectedCharacters(() => {
      return characterSelected;
    });
  };

  const filteredList = selectedCharacters ? characters[selectedCharacters] : [];

  return (
    <>
      <h1>Question 1</h1>
      <button onClick={buttonHandler} value="heroes">
        Show Heroes
      </button>
      <button onClick={buttonHandler} value="villains">
        Show Villians
      </button>
      {filteredList.map((character) => (
        <div>
          <h3>{character.name}</h3>
          <p>{character.powers}</p>
          <p>{character.costume}</p>
        </div>
      ))}
    </>
  );
}
