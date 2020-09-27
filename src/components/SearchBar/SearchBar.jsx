import React, { Fragment, useEffect, useState } from 'react';
import style from './SearchBar.module.css';
import SearchResult from './SearchResult.jsx';
import data from '../../data/recipes.json';

const SearchBar = (props) => {
  const [searchState, setSearchState] = useState([]);
  const recipes = data.recipes;

  //función conectada al evento onChange
  const searchHandler = (event) => {
    const searchTerm = event.target.value.toLowerCase();

    //función de filtrado según caracteres ingresados por el usuario (se ejecuta más abajo)
    const filterObj = (searchTerm) => {
      const result = recipes.filter(obj => {
        if (obj.name.toLowerCase().includes(searchTerm)) {
          return obj;
        } 
      });
      let searchResult = null;
      setSearchState(() => {
        searchResult = result.map(obj => {
          return {
            id: obj.id,
            name: obj.name,
            img: obj.img
            
          }
       })
       return searchResult;
      })
    };

    //vaciar estado o filtrado + actualización de estado
    if (event.target.value.length < 1) {
      setSearchState([]);
    } else {
      filterObj(searchTerm);
    }    
  }

  //llenando la lista de resultados de búsqueda
  let displayedResult = null;
  displayedResult = searchState.map(obj => {
    return(
      <SearchResult key={Math.random() * 1000} name={obj.name} image={obj.img} />
    )
  })
     

  return (
    <div>
      <div className={style.searchBarContainer}>
        <input onChange={searchHandler} className={style.searchBar} type="text" placeholder="Buscar" /><span className="iconify" data-icon="whh:magnifier" data-inline="false"></span>
      </div>
      <ul className={style.searchResultsContainer}>
        {displayedResult}
      </ul>
    </div>
  );
}

export default SearchBar;