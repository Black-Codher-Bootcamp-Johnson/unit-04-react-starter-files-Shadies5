import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import BookcasePage from './pages/BookcasePage';
import AboutUsPage from "./pages/AboutUsPage";
import Header from "./components/Header";
import Search from './components/Search';
import bookData from "./models/books.json";


function App() {
  const [books, setBooks] = useState(bookData);
  const [keyword, setKeyword] = useState("");

  async function findBooks(keyword) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${keyword}&filter=paid-ebooks&print-type=books&projection=lite`;
    let data = bookData;

    if (keyword.length > 0) {
      const results = await fetch(url).then(res => res.json());
      
      if (!results.error) {
        data = results.items;
      }
    }

    setBooks(data);
  }

  return (
    <Router>
      <Header />
      <Search keyword={keyword} setKeyword={setKeyword} findBooks={findBooks} setBooks={setBooks} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <HomePage books={books} addBook={addBook}></HomePage>
            </>
          }
        />
        <Route
          path="/bookcase"
          element={<BookcasePage books={books} addBook={addBook}></BookcasePage>}
        />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );

}

function addBook(title) {
  console.log(`The Book ${title} was clicked`);
}

export default App;
