# Game of Thrones Kitapları

Bu proje, React kullanarak bir API'den veri çekme ve bu veriyi bir web sayfasında görüntüleme yeteneklerini göstermek için oluşturulmuştur. Proje, Game of Thrones kitaplarının listesini alır ve her bir kitap için belirli detayları gösterir.

## Kodun Açıklaması

```javascript
import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
```

Bu kısım, projede kullanılan React ve ReactDOM kütüphanelerini ve CSS stil dosyasını içe aktarır.

```javascript
function App() {
  const [books, setBooks] = useState([]);
  const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";
```

Bu kısım, kitapları tutmak için bir state oluşturur ve API URL'ini tanımlar.

```javascript
  const handleClick = () => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  };
```

Bu kısım, API'den veri çeken ve bu veriyi state'e ayarlayan bir fonksiyon oluşturur.

```javascript
  return (
    <div className="App">
      <h1>Game of Thrones Kitapları</h1>
      <h2>API'den liste alın ve görüntüleyin</h2>
```

Bu kısım, uygulamanın başlığını ve alt başlığını görüntüler.

```javascript
      <div>
        <button onClick={handleClick} className="fetch-button">
          Fetch Data
        </button>
        <br />
      </div>
```

Bu kısım, veri çekmek için bir buton oluşturur.

```javascript
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
```

Bu kısım, her bir kitabı ve onun detaylarını görüntüler.

## Lisans
Bu proje, eğitim amaçlı olarak oluşturulmuştur ve herkesin kullanımına açıktır.
```
