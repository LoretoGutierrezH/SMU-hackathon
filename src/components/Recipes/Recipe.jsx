import React from 'react';
import style from './Recipes.module.css';
import Card from 'react-bootstrap/Card';

//comentario para pushear

const Recipe = (props) => {
  return (
      <Card className={style.cardContainer}>
        <Card.Img variant="top" src={props.image} />
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