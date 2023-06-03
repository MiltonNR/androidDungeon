import React from "react";
import "./assets/CartItems.css"

const CartItem = ({ id, imagen, titulo, autor, precio, cantidad }) => {
  return (
    <div className="CardAddItem">
      <img src={imagen} alt={titulo} className="CardAddImg" />
      <div className="CardAddInfo">
        <h3 className="CardAddTitle">{titulo}</h3>
        <p className="CardAddAuthor">Autor: {autor}</p>
        <p className="CardAddPrice">Precio: ${precio}</p>
        <p className="CardAddQuantity">Cantidad: {cantidad}</p>
      </div>
    </div>
  );
};

export default CartItem;
