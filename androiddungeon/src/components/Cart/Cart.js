import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import "./assets/cart.css"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to="/" className="Option">Productos:</Link>
            </div>
        )
    }

    return (
        <div className="CartContainer">
            {   cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>Total: ${total}</h3>
            <div className="OptionCartContainer">
                <button onClick={() => clearCart()} className="OptionCart">Limpiar Carrito</button>
                <Link to="/checkout" className="OptionCart">Finalizar Compra</Link>
            </div>
        </div>
    )

}






export default Cart