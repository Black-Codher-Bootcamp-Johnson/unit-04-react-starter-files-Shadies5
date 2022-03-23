import React, {useState} from 'react';
import BookList from './components/BookList';
import bookData from './models/books.json';

function App() {
  const [books]= useState (bookData);
  
  return <BookList books = {books} addBook ={addBook}> </BookList>;
}

function addBook(title) {
  console.log(`The Book ${title} was clicked`);
}

export default App;

