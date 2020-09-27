import React from 'react';
import firebase, { db, auth } from './Firebase';
import Header from './components/Header/Header.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import BannerSlider from './components/BannerSlider/BannerSlider.jsx';
import Recipes from './components/Recipes/Recipes.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import  { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
console.log(db, auth.currentUser);
const App = () => {
  const signUpHandler = (event) => {
    console.log('Registro con correo y contraseña');
  }

  const signInHandler = (event) => {
    console.log('Inicio de sesión con correo y contraseña');
  }

  /* Extra, solo si alcanza el tiempo, porque hay que modificar el flujo del botón Ingresar
    const signInGoogle = (event) => {
    console.log('Autenticación con gmail');
  } */

  const signOutHandler = () => {
    console.log('Cierre de sesión');
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <h1>Página principal de Unimarc Recetas</h1>
          </Route>
          <Route path="/recetas" component={Recipes} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
