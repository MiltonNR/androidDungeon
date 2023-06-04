import React from "react";
import ItemCount from "../ItemCount/ItemCount"
import "./assets/CartItems.css"
import { useContext } from "react"
import CartContext from "../../context/CartContext";

const CartItem = ({ id, imagen, stock, titulo, autor, precio, quantity }) => {

  const { updateQuantity, removeItem  } = useContext(CartContext)

  return (
    <div className="CardAddItem">
      <img src={imagen} alt={titulo} className="CardAddImg" />
      <div className="CardAddInfo">
        <h3 className="CardAddTitle">{titulo}</h3>
        <p className="CardAddAuthor">Autor: {autor}</p>
        <p className="CardAddPrice">Precio: ${precio}</p>
        <p className="CardAddQuantity">Cantidad: {quantity}</p>
      </div>
      
      <ItemCount initial={quantity} stock={stock} onAdd={(newQuantity) => updateQuantity(id, newQuantity)} buttonLabel="Modificar Cantidad"/>

      <button onClick={() => removeItem(id)}>X</button>

    </div>
  );
};

export default CartItem;
