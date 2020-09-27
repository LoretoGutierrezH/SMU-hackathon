import React from 'react';

const SearchResult = (props) => {
  return (
    <li>
      <h5>{props.name}</h5>
      <div className="imgContainer">
        <img src={props.image} alt=""/>
      </div>
    </li>
  );
}

export default SearchResult;