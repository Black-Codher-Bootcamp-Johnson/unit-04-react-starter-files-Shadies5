import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './Styles/App.css';
import Header from './components/Header';
import BookList from './components/BookList';
import About from './pages/About';
import Search from './components/Search';
import data from './models/local-books.json';

const App = () => {
  const [books, setBooks] = useState(data);
  const [bookcase, setBookcase] = useState([]);

  async function findBooks(keyword) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${keyword}&filter=paid-ebooks&print-type=books&projection=lite`;
    const results = await fetch(url).then(res => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }

  const addToBookcase = (id) => {
    setBookcase(bookcase.concat(books.filter(book => book.id === id)));
    setBooks([...books.map(book => {
      if (book.id === id) {
        book.read = true;
      }
      return book;
    }
    )]);
  }

  const removeFromBookcase = (id) => {
    setBookcase(bookcase.filter(book => book.id !== id));
    setBooks([...books.map(book => {
      if (book.id === id) {
        book.read = false;
      }
      return book;
    }
    )]);
  }

  useEffect(() => {
    document.title = `My Library ${bookcase.length} Read`;
    Array.from(document.getElementsByClassName("bookLink")).forEach((el) => {
      el.innerText = ` Bookcase (${bookcase.length})`;
    });
  });

  return (
    <Router>
      <div className="container">
        <Routes>
        <Route exact path="/Bookcase" render={() => (
          <Fragment>
            <Header bookLength={bookcase.length} />
            <Search bookcase={bookcase} setBookcase={setBookcase} findBooks={findBooks} setBooks={setBooks}/>
            <BookList books={books} stored="library" addToBookcase={addToBookcase} removeFromBookcase={removeFromBookcase} />
          </Fragment>
        )} />
        <Route path="/bookcase" render={() => (
          <Fragment>
            <Header bookLength={bookcase.length} />
            <BookList books={bookcase} stored="bookcase" addToBookcase={addToBookcase} removeFromBookcase={removeFromBookcase} />
          </Fragment>
        )} />
        <Route path="/about" component={() => <About bookLength={bookcase.length} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;