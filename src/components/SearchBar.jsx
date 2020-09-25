import React, { Fragment, useEffect, useState } from 'react';
import style from './SearchBar.module.css';
import SearchResult from './SearchResult.jsx';

const SearchBar = (props) => {
  const [searchState, setSearchState] = useState([]);

  const placeholderData = [
    {
      id: "PH-1000",
      name: "Palta Hass",
      price: "1000",
      quantity: "1kg",
      image: "url de imagen",
    },
    { 
      id: "T1-1000",
      name: "Tomatoes 1",
      price: "1000",
      quantity: "1kg",
      image: "url de imagen",
    },
    {
      id: "T2-2000",
      name: "Tomatoes 2",
      price: "2000",
      quantity: "1kg",
      image: "url de imagen",
    },
  ];

  const searchHandler = (event) => {
    const searchTerm = event.target.value.toLowerCase();

    //función principal
      const filterObj = (searchTerm) => {
      const result = placeholderData.filter(obj => {
        if (obj.name.toLowerCase().includes(searchTerm)) {
          return obj;
        }
      });
      console.log(result);
      let searchResult = null;
      setSearchState(() => {
        searchResult = result.map(obj => {
          return {
            id: obj.id,
            name: obj.name,
            price: obj.price,
            quantity: obj.quantity
            
          }
       })
       return searchResult;
      })
    };
    //ejecución de función
    filterObj(searchTerm);
  }

  let displayedResult = null;
  displayedResult = searchState.map(obj => {
    return(
      <SearchResult key={obj.id} id={obj.id} name={obj.name} price={obj.price} quantity={obj.quantity} />
    )
  })
     

  return (
    <div>
      <div className={style.searchBarContainer}>
        <input onChange={searchHandler} className={style.searchBar} type="text" placeholder="Buscar" /><span className="iconify" data-icon="whh:magnifier" data-inline="false"></span>
      </div>
      <ul className="searchResultsContainer">
        {displayedResult}
      </ul>
    </div>
  );
}

export default SearchBar;