import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  const [books, setBooks] = useState([]);
  const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";

  const handleClick = () => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  };

  return (
    <div className="App">
      <h1>Game of Thrones Kitapları</h1>
      <h2>API'den liste alın ve görüntüleyin</h2>

      {/* Fetch data  API */}
      <div>
        <button onClick={handleClick} className="fetch-button">
          Fetch Data
        </button>
        <br />
      </div>

      {/* API'den gelen veriyi gösterin */}

      {/* Her kitap için aşağıdaki JSX'i kullanın*/}
      {books.map((book) => {
        return (
          <div key={book.isbn} className="books">
            <div className="book">
              <h3>{book.isbn}</h3>
              <h2>{book.name}</h2>

              <div className="details">
                <p>👨: {book.authors}</p>
                <p>📖: {book.numberOfPages}</p>
                <p>🏘️: {book.country}</p>
                <p>⏰:{book.released}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
