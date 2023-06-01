import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MandarXY } from './MandarXY';
import { Greeting, HolaFalso, UserCard } from './Greeting';
import { Boton } from './Boton';
//import XProducto, { Navbar as ComponenteNavBar } from './Product'

import * as Producto from './Product'; // aca importamos todo lo del archivo de Product sus funciones etc y lo nombramos al gusto

const root = ReactDOM.createRoot(document.getElementById('root'));

function GreetingFazt() {
  const user = {
    firstName: 'Keven',
    lastName: 'Bardales',
  };

  return (
    <div>
      <h3>Nombre: {user.firstName}</h3>
      <h3>Apellido: {user.lastName}</h3>
    </div>
  );
}

root.render(
  <>
    <App></App>
    <Boton content='Click Me!' num={1} />

    <Boton content='Pay' num={2} />
    <Boton content='Go To' num={3} />
    <Boton content={{ text: 'hola' }} num={4} />
    <Boton content='Boton' num={5} />

    {/* <Producto.Navbar /> */}
    {/*  <Greeting title='hola' id={1} nombre='Componente' />
    <Greeting x='bye' id={2} nombre='Greeting' />
    <Greeting y={30} id={3} nombre='CompBye' />
    <Greeting z={true} id={4} nombre='CompWelc' />
    <Greeting a={[1, 2, 3]} id={5} /> */}
    {/*  <GreetingFazt />
    <HolaFalso />
    <MandarXY />
    <MandarXY />
    <MandarXY />
    <Producto.default /> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
