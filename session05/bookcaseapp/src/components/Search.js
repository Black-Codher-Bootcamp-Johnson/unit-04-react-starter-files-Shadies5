import React from "react";

const Search = (props) => {
  const { keyword, setKeyword, findBooks } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    findBooks(keyword);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <p>
          <label>Search: </label>
          <input
            type="text"
            name="search" className= "word" 
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <input type="submit" value= "Search" />
        </p>
        {keyword && "Keywords Typed: " + keyword}
      </form>
    </div>
  );
};

export default Search;
