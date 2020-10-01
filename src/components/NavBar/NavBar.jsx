import React, { useEffect, useState } from 'react';
import style from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import UnimarcLogo from '../../assets/logo.png';
//comentario para pushear

const NavBar = (props) => {
  const [navBrand, setNavBrand] = useState(false);
  const viewportWidth = document.documentElement.clientWidth;

  const showNavBrand = (value) => {
    if (!navBrand) {
      setNavBrand(value);
    } else {
      setNavBrand(value);
    }
  };

  useEffect(() => {
    if (viewportWidth < 768) {
      showNavBrand(true);
    } else {
      showNavBrand(false);
    }
  }, [])
  



  

  return (
    <section>
      <Navbar collapseOnSelect expand="lg" className={style.bgColor}>
        <Navbar.Brand className={navBrand ? `${style.active}` : `${style.hidden}`} style={{position: "absolute", left: "5.8rem", top: "1.4rem", width: "10rem"}}><img style={{width: "100%"}} src={UnimarcLogo} alt="Logo Unimarc"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse style={{backgroundColor: "#DA291C"}} id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown
              className={style.menuBtn}
              title="Categorías"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item className={style.ddItem} style={{color: "white"}} href="https://www.unimarc.cl/catalogo/" target="_blank">Catálogo</NavDropdown.Item>
              <Link to="/recetas" className={style.innerLink}><NavDropdown.Item className={style.ddItem} style={{color: "white"}}>Recetas</NavDropdown.Item></Link>
              <NavDropdown.Item className={style.ddItem} style={{color: "white"}} href="https://www.clubahorro.cl/?pid=Unimarc.cl&c=Lanzamiento_APPCA&af_channel=referral&af_ad=Pesta%C3%B1a_Club_Ahorro">
                Club Ahorro
              </NavDropdown.Item>
              <NavDropdown.Item className={style.ddItem} style={{color: "white"}} href="https://www.unimarc.cl/receta-junaeb/">
                Recetas Junaeb
              </NavDropdown.Item>
              <NavDropdown.Item className={style.ddItem} style={{color: "white"}} href="https://www.unimarc.cl/ofertas/">OFERTAS</NavDropdown.Item>
              <NavDropdown.Item className={style.ddItem} style={{color: "white"}} href="https://www.unimarc.cl/locales_unimarc/">
                Locales y Horarios
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link style={{ color: "white", margin: "0 auto"}}>
              <Link
                style={{ color: "white"}}
                className={`${style.links} ${style.centeredLink}`}
                to="/recetas"
              >
                Recetas
              </Link>
            </Nav.Link>
            <NavDropdown
              className={style.menuBtn}
              title="Selecciona tu local"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item className={style.ddItem} style={{color: "white"}} href="#action/3.1">
                Independencia
              </NavDropdown.Item>
              <NavDropdown.Item className={style.ddItem} style={{color: "white"}} href="#action/3.2">Las Condes</NavDropdown.Item>
              <NavDropdown.Item className={style.ddItem} style={{color: "white"}} href="#action/3.3">Maipú</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link href="#shopping-cart">
          <span
            className="iconify"
            data-icon="el:shopping-cart"
            data-inline="false"
          ></span>
        </Nav.Link>
      </Navbar>
    </section>
  );
}

export default NavBar;