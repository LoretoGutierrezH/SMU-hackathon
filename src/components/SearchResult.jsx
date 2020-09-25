import React from 'react';

const SearchResult = (props) => {
  return (
    <li>
      <h5>{props.name}</h5>
      <p>{props.quantity}</p>
      <p>{props.price}</p>
    </li>
  );
}

export default SearchResult;