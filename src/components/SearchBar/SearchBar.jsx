import React, { Fragment, useEffect, useState } from 'react';
import style from './SearchBar.module.css';


const SearchBar = (props) => {
  return (
    <div>
      <div className={style.searchBarContainer}>
        <input onChange={props.search} className={style.searchBar} type="text" placeholder="BUSCAR" /><span className={`iconify ${style.iconBg}`} data-icon="whh:magnifier" height="1px"  width="1px" data-inline="false"></span>
      </div>
    </div>
  );
}

export default SearchBar;