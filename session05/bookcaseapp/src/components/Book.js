import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

function Book(props) {
  const { 
    id,
    saleInfo: {retailPrice},
    volumeInfo:{
      title,
      description,
      imageLinks: {thumbnail},
      authors
    }
  } = props.book

  return (
    <div className= "book" data-id={id}>
      <img src =  {thumbnail} alt = {title} />
    <h2>{title}</h2>
    <dl>
    <div>
    <dt>Authors</dt>
    {authors ? authors.map(author => <dd key={author}>{author}</dd>) : <dd>{'No authors listed'}</dd>}
  </div>
        <div>
          <dt>Price</dt>
          <dd>{retailPrice ? `£${retailPrice.amount}` : 'No price listed'}</dd>
        </div>
      </dl>
      <button onClick={ () => props.onClick ()}>Add +</button>
    <p>{description}</p>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.array.isRequired,
      description: PropTypes.string
    }),
    saleInfo: PropTypes.shape({
      retailPrice: PropTypes.shape({
        amount: PropTypes.number.isRequired
      })
    })
  })
};
Book.defaultProps = {
  volumeInfo: {description: "No description"},
  saleInfo: {retailPrice: {amount: 0} }
}

export default Book;
