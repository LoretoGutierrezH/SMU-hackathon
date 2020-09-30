import React from 'react';
import style from './Recipes.module.css';
import Card from 'react-bootstrap/Card';


const Recipe = (props) => {
  return (
      <Card className={style.cardContainer}>
        <Card.Img variant="top" src={props.image} />

      <Card style={{ border: "none" }} className={style.cardContainer}>
        <Link to="/recetas/saludables/lasaña-atún"><Card.Img
          className={style.recipeImage}
          variant="top"
          src={props.image}
        /></Link>

        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
        </Card.Body>
      </Card>


  );



}

export default Recipe;