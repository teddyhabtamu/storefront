import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { use } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [realseYear, setReleaseYear] = useState(0);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8003/api/books/");
      const data = await response.json();
      setBooks(data)
    } catch (err) {
      console.log(err);
    }
  };

  const addBook = async () => {
    
  }

  return (
    <>
      <h1> Book Website </h1>

      <div>
        <input type="text" name="" id="" placeholder="Book Title..." onChange={e => setTitle(e.target.value)} />
        <input type="number" name="" id="" placeholder="Release Year..." onChange={e => setReleaseYear(e.target.value)}/>
        <button> Add Book </button>
      </div>
      {books.map((book) => (
        <div key={book.id}>
          <p>Title: {book.title}</p>
          <p>Release: {book.release_year}</p>
        </div>
      ))}
    </>
  );
}

export default App;
