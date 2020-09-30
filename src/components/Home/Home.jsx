import React from 'react';
import style from './Home.module.css';
import { Link } from 'react-router-dom';
import BannerSlider from '../BannerSlider/BannerSlider.jsx';
import { Card, Button } from 'react-bootstrap';
//imágenes para las tarjetas
import uniredImg from '../../assets/unired.jpg';
import fourByFour from '../../assets/4x4.png';
import uniCard from '../../assets/tarjeta.jpg';
import inclusivo from '../../assets/inclusivo.jpg';
import locales from '../../assets/locales.jpg';
import delivery from '../../assets/glovo-cornershop-rappi.jpg';
//comentario para pushear

const Home = (props) => {
  return (
    <main className={style.recipesContainer}>
      <BannerSlider />
      <section className={style.cardsContainer}>
        <Card style={{ width: "16rem", margin: "2rem", boxShadow: "0px 4px 5px 0px rgba(0,0,0,0.59)"}}>
          <Card.Title style={{padding: "1rem", fontFamily: "clarendonFamily"}}>Paga tus cuentas en Unired</Card.Title>
          <Card.Img style={{width: "10rem", margin: "0 auto", maxHeight: "12rem"}} variant="top" src={uniredImg} />
          <Card.Body style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start"}}>
            <Card.Text>
              Acércate al autoservicio Unired en tu Unimarc más cercano y paga
              tus cuentas en un solo lugar.También puedes ingresar a unired.cl.
            </Card.Text>
            <a href="https://www.unired.cl/?gclid=Cj0KCQjwtsv7BRCmARIsANu-CQcOrRZ0lPL_Gia5l-SUHAbbSKxsEOvqtY6a-At2Dmp6nps1Bomjfm8aAqbeEALw_wcB" target="_blank"><Button style={{ backgroundColor: "#DA291C", fontFamily: "clarendonFamily", fontWeight: "bold", border: "none"}} variant="primary">
              Ir a Unired
            </Button></a>
          </Card.Body>
        </Card>

        <Card style={{ width: "16rem", margin: "2rem", boxShadow: "0px 4px 5px 0px rgba(0,0,0,0.59)" }}>
          <Card.Title style={{padding: "1rem", fontFamily: "clarendonFamily"}}>Recetas más ricas</Card.Title>
          <Card.Img style={{width: "10rem", margin: "0 auto", maxHeight: "12rem"}} variant="top" src={fourByFour} />
          <Card.Body style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start"}}>
            <Card.Text>
              Ven y encuentra las mejores recetas para compartir en familia o sorpender a quien quieras.
            </Card.Text>
            <Button style={{ backgroundColor: "#DA291C", fontFamily: "clarendonFamily", fontWeight: "bold", border: "none"}} variant="primary">
              <Link className={style.links} to="/recetas">Ver recetas</Link>
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "16rem", margin: "2rem", boxShadow: "0px 4px 5px 0px rgba(0,0,0,0.59)" }}>
          <Card.Title style={{padding: "1rem", fontFamily: "clarendonFamily"}}>Tus Compras con Delivery</Card.Title>
          <Card.Img style={{width: "10rem", margin: "0 auto", maxHeight: "12rem"}} variant="top" src={delivery} />
          <Card.Body style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start"}}>
            <Card.Text>
              Quieres realizar tus compras online con despacho a domicilio, ahora puedes a través de Rappi y Cornershop. 
            </Card.Text>
            <a href="https://www.unimarc.cl/pyme/" target="_blank"><Button style={{ backgroundColor: "#DA291C", fontFamily: "clarendonFamily", fontWeight: "bold", border: "none"}} variant="primary">
              Conoce Más
            </Button></a>
          </Card.Body>
        </Card>

        <Card style={{ width: "16rem", margin: "2rem", boxShadow: "0px 4px 5px 0px rgba(0,0,0,0.59)" }}>
          <Card.Title style={{padding: "1rem", fontFamily: "clarendonFamily"}}>Tarjeta Unimarc</Card.Title>
          <Card.Img style={{width: "10rem", margin: "0 auto", maxHeight: "12rem"}} variant="top" src={uniCard} />
          <Card.Body style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start"}}>
            <Card.Text>
              Obten descuentos pagando con tu huella o tarjeta.Para más información llama al 6003909000 o pide tu tarjeta en en www.tarjetaunimarc.cl.  
            </Card.Text>
            <a href="https://www.tarjetaunimarc.cl/" target="_blank"><Button style={{ backgroundColor: "#DA291C", fontFamily: "clarendonFamily", fontWeight: "bold", border: "none"}} variant="primary">
              Conoce Más
            </Button></a>
          </Card.Body>
        </Card>

        <Card style={{ width: "16rem", margin: "2rem", boxShadow: "0px 4px 5px 0px rgba(0,0,0,0.59)" }}>
          <Card.Title style={{padding: "1rem", fontFamily: "clarendonFamily"}}>¡Juntos por la inclusión!</Card.Title>
          <Card.Img style={{width: "10rem", margin: "0 auto", maxHeight: "12rem"}} variant="top" src={inclusivo} />
          <Card.Body style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start"}}>
            <Card.Text>
              Porque estamos por la inclusión, Unimarc y Fundación Descúbreme impulsan el fondo Descúbreme.
            </Card.Text>
            <a href="https://www.unimarc.cl/fundacion-descubreme/" target="_blank"> <Button style={{ backgroundColor: "#DA291C", fontFamily: "clarendonFamily", fontWeight: "bold", border: "none" }} variant="primary">
              Conoce Más
            </Button></a>
          </Card.Body>
        </Card>

        <Card style={{ width: "16rem", margin: "2rem", boxShadow: "0px 4px 5px 0px rgba(0,0,0,0.59)" }}>
          <Card.Title style={{padding: "1rem", fontFamily: "clarendonFamily"}}>Locales y Horarios</Card.Title>
          <Card.Img style={{width: "10rem", margin: "0 auto", maxHeight: "12rem"}} variant="top" src={locales} />
          <Card.Body style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start"}}>
            <Card.Text>
              Conoce nuestra red de locales y sus horarios de atención.
            </Card.Text>
            <a href="https://www.unimarc.cl/locales_unimarc/" target="_blank"><Button style={{ backgroundColor: "#DA291C", fontFamily: "clarendonFamily", fontWeight: "bold", border: "none" }} variant="primary">
              Conoce Más
            </Button></a>
          </Card.Body>
        </Card>
      </section>
    </main>
  );
}

export default Home;