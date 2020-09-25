import React from 'react';
import firebase, { db, auth } from './Firebase';
import style from './App.module.css';
import SearchBar from './components/SearchBar.jsx';
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
        <Route path="/">
          <h1>Página principal de Unimarc Recetas</h1>
          {/* botones para rutear a formulario de ingreso o registro */}
          <nav>
            <p className={style.authBtn}>Ingresa</p>
            <p className={style.authBtn}>Regístrate</p>
          </nav>
          <SearchBar></SearchBar>
        </Route>
      </div>
    </Router>
  );
}

export default App;
