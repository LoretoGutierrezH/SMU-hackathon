import React from 'react';
import style from './Recipes.module.css';
import Card from 'react-bootstrap/Card';

const Recipe = (props) => {
  return (
      <Card style={{border: "none"}} className={style.cardContainer}>
        <Card.Img style={{height: "22.2rem"}} variant="top" src={props.image} />
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