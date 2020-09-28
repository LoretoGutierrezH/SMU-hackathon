import React, { useState } from 'react';
import style from './Recipes.module.css';
import SearchBar from '../SearchBar/SearchBar.jsx';
import MainBanner from '../MainBanner/MainBanner.jsx';
import data from "../../data/recipes.json";
import Recipe from "../Recipes/Recipe.jsx";

const Recipes = (props) => {
  const [searchState, setSearchState] = useState([]);
  const [menuState, setMenuState] = useState(false);
  const recipes = data.recipes;

  //función conectada al evento onChange
  const searchHandler = (event) => {
    const searchTerm = event.target.value.toLowerCase();

    //función de filtrado según caracteres ingresados por el usuario (se ejecuta más abajo)
    const filterObj = (searchTerm) => {
      const result = recipes.filter((obj) => {
        if (obj.name.toLowerCase().includes(searchTerm)) {
          return obj;
        }
      });
      let searchResult = null;
      setSearchState(() => {
        searchResult = result.map((obj) => {
          return {
            id: obj.id,
            name: obj.name,
            img: obj.img,
            description: obj.description,
          };
        });
        return searchResult;
      });
    };

    //vaciar estado o filtrado + actualización de estado
    if (event.target.value.length < 1) {
      setSearchState([]);
    } else {
      filterObj(searchTerm);
    }
  };

  //llenando la lista de resultados de búsqueda
  let displayedResult = null;
  displayedResult = searchState.map((obj) => {
    return (
      <Recipe
        key={Math.random() * 1000}
        name={obj.name}
        image={obj.img}
        description={obj.description}
      />
    );
  });

  const showList = () => {
    if (menuState === false) {
     setMenuState(true);
    } else {
      setMenuState(false);
    }
  }
  return (
    <main className={style.recipesContainer}>
      <MainBanner></MainBanner>
      <p>Placholder de Breadcrumbs</p>
      <section className={style.actionsContainer}>
        <section className={style.menu}>
          <button onClick={() => showList()} className={style.menuBtn}>
            Menú <span className={style.chevron}>&#x2304;</span>
          </button>
          <ul className={!menuState ? `${style.menuList} ${style.hidden}` : `${style.menuList} ${style.active}`}>
            <li>Saludables</li>
            <li>Almuerzos</li>
            <li>Postres</li>
            <li>Sopas</li>
            <li>Vegetariano</li>
            <li>Sin gluten</li>
            <li>En menos de 30 min</li>
          </ul>
        </section>
        <SearchBar search={(event) => searchHandler(event)}></SearchBar>
      </section>
      <section className={style.cardsWrapper}>{displayedResult}</section>
    </main>
  );
}

export default Recipes;