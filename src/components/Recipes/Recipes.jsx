import React, { useState } from 'react';
import style from './Recipes.module.css';
import SearchBar from '../SearchBar/SearchBar.jsx';
import MainBanner from '../MainBanner/MainBanner.jsx';
import data from "../../data/recipes.json";
import Recipe from "../Recipes/Recipe.jsx";
import { Link } from 'react-router-dom';

const Recipes = (props) => {
  const miniData = [
    {
      id: 21,
      name: "Lasaña de Verduras y Atún",
      img:
        "https://firebasestorage.googleapis.com/v0/b/unimarc-recetas.appspot.com/o/img-home%2Flasa%C3%B1a-atun.jpg?alt=media&token=2bf868b7-f12a-4f04-9bbb-7b97f1c98129",
      description:
        "Descubre como preparar una deliciosa lasaña con un toque bastante especial.",
    },
    {
      id: 14,
      name: "Canelones Rellenos de Espinaca",
      img:
        "https://firebasestorage.googleapis.com/v0/b/unimarc-recetas.appspot.com/o/img-home%2Fcanelones.jpg?alt=media&token=4e7fe9ba-877e-4b54-bd2e-c61a5902eb06",
      description:
        "Los canelones son un plato delicioso y muy versátil. Pueden servir para una comida en casa, en un día cualquiera, y también para una cena con invitados. ",
    },
    {
      id: 14,
      name: "Budín de Acelga",
      img:
        "https://firebasestorage.googleapis.com/v0/b/unimarc-recetas.appspot.com/o/img-home%2Fbudin-acelga.jpg?alt=media&token=a5a4bc05-7d35-4f61-aaf7-d795db38e139",
      description:
        "Para aquellos que quieran disfrutar de un plato sabroso y delicioso,una receta fácil y rápida.",
    },
    {
      id: 16,
      name: "Souffle de Zanahoria",
      img:
        "https://firebasestorage.googleapis.com/v0/b/unimarc-recetas.appspot.com/o/img-home%2Fsoufle.jpg?alt=media&token=4a753dfd-0993-47b4-8d2e-a3739a689fae",
      description:
        "Disfrutar un souffle de zanahoria cremoso por dentro y crujiente por fuera.",
    },
  ];

  const [searchState, setSearchState] = useState(miniData);
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
      setSearchState(miniData);
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
        </section>
        <SearchBar search={(event) => searchHandler(event)}></SearchBar>
      </section>
      <ul className={!menuState ? `${style.menuList} ${style.hidden}` : `${style.menuList} ${style.active}`}>
            <Link className={style.links} to="/recetas/saludables"><li style={{ marginTop: "1rem"}}>Saludables</li></Link>
            <li>Almuerzos</li>
            <li>Postres</li>
            <li>Sopas</li>
            <li>Vegetariano</li>
            <li>Sin gluten</li>
            <li>En menos de 30 min</li>
          </ul>
      <section className={style.cardsWrapper}>{displayedResult}</section>
    </main>
  );
}

export default Recipes;