import React, { Fragment, useEffect, useState } from 'react';
import style from './SearchBar.module.css';


const SearchBar = (props) => {
  return (
    <div>
      <div className={style.searchBarContainer}>
        <input onChange={props.search} className={style.searchBar} type="text" placeholder="Buscar" /><span className={`iconify ${style.iconBg}`} data-icon="whh:magnifier" data-inline="false"></span>
      </div>
    </div>
  );
}

export default SearchBar;