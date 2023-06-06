import carrito  from "./assets/carrito.png"
import "./assets/stylesCW.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {

    const { total,cart } = useContext(CartContext)

    const getItemsText = () => {
        if (cart.length === 1) {
          return "item";
        } else {
          return "items";
        }
      }

    return (

        <Link to="/cart" className="CartWidget" style={{display:total > 0 ? "flex" : "none"}}>
            <img className="carrito" src={carrito} alt="carrito"/>
           ¡Androide! Tenés ({cart.length}) {getItemsText()} por la suma de: { total }  
        </Link>

    )
}

export default CartWidget