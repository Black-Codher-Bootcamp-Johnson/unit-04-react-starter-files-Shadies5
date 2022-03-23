import React, { useState, Fragment } from 'react';
import ReactDOM from 'react-dom';
import bookArray from './models/books.json';

import BookCounter from './components/BookCounter';

const App = () => {
  const [localLibrary,setLibrary] = useState({name:"Sarah", books : bookArray});
const refreshBooks = () => {
  setLibrary({name:"Sarah", books : [{
    "volumeInfo": {
    "title":"The Wind Blew West"
  }
  }]
});
}
  return <Fragment>
    <h1>Welcome to My Library</h1>
    <BookCounter library={localLibrary} refreshBooks={refreshBooks}/>
  </Fragment>;
}

ReactDOM.render(<App/>,document.getElementById('root'));
