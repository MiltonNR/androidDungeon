import carrito  from "./assets/carrito.png"
import "./assets/stylesCW.css"

const CartWidget = () => {
    return (
        <div className="CartWidget">
            <img className="carrito" src={carrito} alt="carrito"/>
            0,00
        </div>
    )
}

export default CartWidget