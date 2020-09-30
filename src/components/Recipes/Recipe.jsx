import React from 'react';
import style from './Recipes.module.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

//comentario para pushear

const Recipe = (props) => {
  return (
      <Card className={style.cardContainer}>
        <Link className={style.recipeLink} to="/recetas/saludables/lasaña-atún"><Card.Img className={style.recipeImage} variant="top" src={props.image} /></Link>
        <Card.Body>
          <Link className={style.recipeLink} to="/recetas/saludables/lasaña-atún"><Card.Title style={{fontFamily: "clarendonFamily"}}>{props.name}</Card.Title></Link>
          <Card.Text>
            {props.description}
          </Card.Text>
        </Card.Body>
      </Card>


  );



}

export default Recipe;