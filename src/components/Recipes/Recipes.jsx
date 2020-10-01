import React, {useState} from 'react';
import SearchBar from "../SearchBar/SearchBar.jsx";
import {NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Breadcrumb } from "react-bootstrap";
import style from './Healthy.module.css';
import data from '../../data/recipes.json';
import Recipe from './Recipe.jsx';
import { Carousel } from "react-bootstrap";
import brownie from "../../assets/brownie (2).png";
import avocado from "../../assets/paltas (1).png";
import weeklyMenu from "../../assets/menuSemanal (1).png";
import share from "../../assets/compartirRecetas (1).png";
import like from "../../assets/likefavorite (1).png";
import tips from "../../assets/tipsUnimarc.png";
import slider from "../../assets/slidervideo.png";

const Healthy = (props) => {
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
  return (
    <section>
      <Breadcrumb>
        <Breadcrumb.Item className={style.breadCrumbLinks} href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item className={style.breadCrumbLinks} href="/recetas">Recetas</Breadcrumb.Item>
      </Breadcrumb>
      <section className={style.actionsContainer}>
        <section className={style.menu}>
          <NavDropdown
            className={style.menuBtn}
            title="Menú"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item
              className={style.ddItem}
              style={{ color: "white" }}
            >
              <Link className={style.links} to="/recetas/saludables">
                Saludables
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item
              className={style.ddItem}
              style={{ color: "white" }}
            >
              <Link className={style.links} to="/recetas/saludables">
                Almuerzos
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item
              className={style.ddItem}
              style={{ color: "white" }}
            >
              <Link className={style.links} to="/recetas/saludables">
                Postres
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item
              className={style.ddItem}
              style={{ color: "white" }}
            >
              <Link className={style.links} to="/recetas/saludables">
                Sopas
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item
              className={style.ddItem}
              style={{ color: "white" }}
            >
              <Link className={style.links} to="/recetas/saludables">
                Vegetariano
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item
              className={style.ddItem}
              style={{ color: "white" }}
            >
              <Link className={style.links} to="/recetas/saludables">
                Sin gluten
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item
              className={style.ddItem}
              style={{ color: "white" }}
            >
              <Link className={style.links} to="/recetas/saludables">
                En menos de 30 minutos
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </section>
      </section>
    <div className={style.homeRecipeContainer}>
        <div className={style.sliderContainer}>
            <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={brownie}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={avocado}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
        </div>
        <div className={style.cardContain}>
          <div className={style.containCards}>
            <img src={weeklyMenu}></img>
          </div>
          <div className={style.containCards}>
            <img src={share}></img>
          </div>
          <div className={style.containCards}>
            <img src={like}></img>
          </div>
        </div>
      <div className={style.containTips}>
        <div className={style.containCards}>
          <img src={tips}></img>
        </div>
        <div className={style.containCards}>
          <img src={slider}></img>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Healthy;