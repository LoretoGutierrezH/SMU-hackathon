import React from 'react';
import style from './Recipes.module.css';
import SearchBar from '../SearchBar/SearchBar.jsx';
import MainBanner from '../MainBanner/MainBanner.jsx';
const Recipes = (props) => {
  return (
    <main className={style.recipesContainer}>
      <MainBanner></MainBanner>
      <p>Placholder de Breadcrumbs</p>
      <section className={style.actionsContainer}>
        <button className={style.menuBtn}>
          Menú <span className={style.chevron}>&#x2304;</span>
        </button>
        <SearchBar></SearchBar>
      </section>
      <section className="cardsWrapper">
        <h4>Soy una lista de recetas</h4>
        <p>Receta 1</p>
        <p>Receta 2</p>
        <p>Receta 3</p>
        <p>Receta 4</p>
      </section>
    </main>
  );
}

export default Recipes;