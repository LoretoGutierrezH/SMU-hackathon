import React from 'react';

const ShoppingCart = (props) => {
  return (
    <section>
      <h5>Nombre del producto</h5>
      <p>Cantidad y precio</p>
      <p>Total: $4000</p>
      <p>Para compra presencial, haz clic en el código QR y se descargará la lista de ingredientes</p>
      <p>Para retiro en tienda, completa la compra haciendo clic en "Pagar"</p>
      <button>Pagar</button>
    </section>
  );
}

export default ShoppingCart;