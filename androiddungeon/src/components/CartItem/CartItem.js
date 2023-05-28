import React from "react";
import "./assets/CartItem.css"; 

const CartItem = ({ id, imagen, titulo, autor, precio, cantidad }) => {
  return (
    <div className="CardItem">
      <img src={imagen} alt={titulo} className="ItemImg" />
      <div className="ItemInfo">
        <h3 className="ItemTitle">{titulo}</h3>
        <p className="ItemAuthor">Autor: {autor}</p>
        <p className="ItemPrice">Precio: ${precio}</p>
        <p className="ItemQuantity">Cantidad: {cantidad}</p>
      </div>
    </div>
  );
};

export default CartItem;
