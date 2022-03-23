import React from 'react';
import Book from './Book';

const BookList = (props) => {
    const {books, addBook} = props;

    return books.map(book => <Book onClick={() => addBook(book.volumeInfo.title)} key ={book.id} book={book} />);
}
export default BookList;