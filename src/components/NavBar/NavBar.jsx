import React from 'react';
import style from './NavBar.module.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
const NavBar = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" className={style.bgColor}>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" >
          <Nav.Link className={style.linksColor} href="#features">Categorías</Nav.Link>
          <Nav.Link href="#pricing">Recetas</Nav.Link>
          <NavDropdown title="Selecciona tu local" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Independencia</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Las Condes
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Maipú</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav.Link href="#shopping-cart"><span class="iconify" data-icon="el:shopping-cart" data-inline="false"></span></Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;