import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import BookcasePage from "./pages/BookcasePage";
import AboutUsPage from "./pages/AboutUsPage";
import bookData from "./models/books.json";

function App() {
  const [books] = useState(bookData);

  return (
    <Router>
      <Header />
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
          path="/bookcasePage"
          element={<BookcasePage books={books} addBook={addBook}></BookcasePage>}
        />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
  //<BookList books = {books} addBook ={addBook}> </BookList>;
}

function addBook(title) {
  console.log(`The Book ${title} was clicked`);
}

export default App;
