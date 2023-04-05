import { useState } from "react";

export function DisplayBooks({ books }) {
  const [selectedGenre, setSelectedGenre] = useState("");

  const buttonHandler = (event) => {
    const genreSelected = event.target.value;
    console.log(genreSelected);
    setSelectedGenre(genreSelected);
  };

  const filteredBooks = selectedGenre
    ? books.filter((book) => book.genre === selectedGenre)
    : books;
  return (
    <>
      <h1>Question6</h1>
      <button value={""} onClick={buttonHandler}>
        All Genres
      </button>
      <button value="Classic" onClick={buttonHandler}>
        Classics
      </button>
      <button value="Dystopian" onClick={buttonHandler}>
        Dystopian
      </button>
      <button value="Young Adult" onClick={buttonHandler}>
        Young Adult
      </button>
      {filteredBooks.map(({ id, title, author, genre }) => (
        <div key={id}>
          <h4>{title}</h4>
          <p>{author}</p>
          <p>{genre}</p>
        </div>
      ))}
    </>
  );
}
