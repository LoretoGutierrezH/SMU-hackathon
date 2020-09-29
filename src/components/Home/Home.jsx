import React from 'react';
import style from './Home.module.css';
import BannerSlider from '../BannerSlider/BannerSlider.jsx';
import { Card, Button } from 'react-bootstrap';
//imágenes para las tarjetas
import uniredImg from '../../assets/unired.jpg';
import fourByFour from '../../assets/4x4.png';
import uniCard from '../../assets/tarjeta.jpg';
import hundredPercent from '../../assets/100%.jpg';
import inclusivo from '../../assets/inclusivo.jpg';
import locales from '../../assets/locales.jpg';

const Home = (props) => {
  return (
    <main className={style.recipesContainer}>
      <BannerSlider />
      <section className={style.cardsContainer}>
        <Card style={{ width: "16rem", margin: "2rem" }}>
          <Card.Title style={{padding: "1rem"}}>Paga tus cuentas en Unired</Card.Title>
          <Card.Img style={{width: "10rem", margin: "0 auto"}} variant="top" src={uniredImg} />
          <Card.Body>
            <Card.Text>
              Acércate al autoservicio Unired en tu Unimarc más cercano y paga
              tus cuentas en un solo lugar.También puedes ingresar a unired.cl.
            </Card.Text>
            <Button style={{ backgroundColor: "#DA291C" }} variant="primary">
              Ir a Unired
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "16rem", margin: "2rem" }}>
          <Card.Title>Paga tus cuentas en Unired</Card.Title>
          <Card.Img style={{width: "10rem", margin: "0 auto"}} variant="top" src={fourByFour} />
          <Card.Body>
            <Card.Text>
              Acércate al autoservicio Unired en tu Unimarc más cercano y paga
              tus cuentas en un solo lugar.También puedes ingresar a unired.cl.
            </Card.Text>
            <Button style={{ backgroundColor: "#DA291C" }} variant="primary">
              Ver recetas
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "16rem", margin: "2rem" }}>
          <Card.Title>Paga tus cuentas en Unired</Card.Title>
          <Card.Img style={{width: "10rem", margin: "0 auto"}} variant="top" src={uniCard} />
          <Card.Body>
            <Card.Text>
              Acércate al autoservicio Unired en tu Unimarc más cercano y paga
              tus cuentas en un solo lugar.También puedes ingresar a unired.cl.
            </Card.Text>
            <Button style={{ backgroundColor: "#DA291C" }} variant="primary">
              Conoce Más
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "16rem", margin: "2rem" }}>
          <Card.Title>Paga tus cuentas en Unired</Card.Title>
          <Card.Img style={{width: "10rem", margin: "0 auto"}} variant="top" src={hundredPercent} />
          <Card.Body>
            <Card.Text>
              Acércate al autoservicio Unired en tu Unimarc más cercano y paga
              tus cuentas en un solo lugar.También puedes ingresar a unired.cl.
            </Card.Text>
            <Button style={{ backgroundColor: "#DA291C" }} variant="primary">
              Conoce Más
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "16rem", margin: "2rem" }}>
          <Card.Title>Paga tus cuentas en Unired</Card.Title>
          <Card.Img style={{width: "10rem", margin: "0 auto"}} variant="top" src={inclusivo} />
          <Card.Body>
            <Card.Text>
              Acércate al autoservicio Unired en tu Unimarc más cercano y paga
              tus cuentas en un solo lugar.También puedes ingresar a unired.cl.
            </Card.Text>
            <Button style={{ backgroundColor: "#DA291C" }} variant="primary">
              Conoce Más
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "16rem", margin: "2rem" }}>
          <Card.Title>Paga tus cuentas en Unired</Card.Title>
          <Card.Img style={{width: "10rem", margin: "0 auto"}} variant="top" src={locales} />
          <Card.Body>
            <Card.Text>
              Acércate al autoservicio Unired en tu Unimarc más cercano y paga
              tus cuentas en un solo lugar.También puedes ingresar a unired.cl.
            </Card.Text>
            <Button style={{ backgroundColor: "#DA291C" }} variant="primary">
              Conoce Más
            </Button>
          </Card.Body>
        </Card>
      </section>
    </main>
  );
}

export default Home;