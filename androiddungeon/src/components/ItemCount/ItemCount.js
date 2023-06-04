import "./assets/ItemCount.css"
import { useState } from "react"

const ItemCount = ({stock, initial, onAdd, buttonLabel}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }


return (
    <div className="Counter">
        <div className="Controls">
            <button className="Button" onClick={decrement}>-</button>
            <h4 className="Number">Cantidad: {quantity}</h4>
            <button className="Button" onClick={increment}>+</button>
        </div>
        <div className="onAddContainer">
            <button className="onAdd" onClick={() => onAdd(quantity)} disabled={!stock}>
                  { buttonLabel || "Agregar al carrito" } 
            </button>
        </div>
    </div>

)

}

export default ItemCount