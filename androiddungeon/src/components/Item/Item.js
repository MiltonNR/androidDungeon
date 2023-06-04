import "./assets/items.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext, useState, useEffect } from "react";

const Item = ({ id, titulo, autor, precio, stock, imagen }) => {
  const [remainingStock, setRemainingStock] = useState(stock);
  const { cart } = useContext(CartContext);
 
    useEffect(() => {
    const productInCart = cart.find((p) => p.id === id);

    if (productInCart) {
      const newValue = stock - productInCart.quantity;
      setRemainingStock(newValue);
    } else {
      setRemainingStock(stock);
    }
  }, [cart, stock]);

  return (
    <article className="CardItem">
      <picture>
        <img src={imagen} alt={titulo} className="ItemImg" />
      </picture>
      <header className="Header">
        <h2 className="ItemHeader">{titulo}</h2>
        <h3 className="IteamAutor">{autor}</h3>
      </header>
      <section>
        <p className="Info">Precio: ${precio}</p>

        <p className="Info">Stock Disponible: {remainingStock}</p>
      </section>

      <footer className="ItemFooter">
        <Link className="OptionFooter" to={`/item/${id}`}>
          Ver detalle
        </Link>
      </footer>
    </article>
  );
};

export default Item;
