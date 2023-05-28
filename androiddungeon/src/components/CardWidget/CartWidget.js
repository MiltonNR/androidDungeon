import carrito  from "./assets/carrito.png"
import "./assets/stylesCW.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (

        <Link to="/cart" className="CartWidget" style={{display: totalQuantity > 0 ? "block" : "none"}}>
            <img className="carrito" src={carrito} alt="carrito"/>
            { totalQuantity }
        </Link>

    )
}

export default CartWidget