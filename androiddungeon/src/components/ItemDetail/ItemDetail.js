import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"


const ItemDetail = ({id, titulo, autor, precio, stock, imagen, detalle}) => {
    const [quantityAdded, setQuantityAdded] = useState (0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, titulo, precio, imagen
        }

        addItem (item, quantity)
    }
    return (
       
        <article className ="CardItem">

        <picture>
        <img src={imagen} alt={titulo} className="ItemImg"/>
        </picture>

            <header className="Header">
                <h2 className="ItemHeader">
                    {titulo}
                </h2>
                <h3 className="IteamAutor">
                    {autor}
                </h3>
            </header>

 
            <section>
                <p className="Info">
                    Precio: ${precio}                    
                </p> 

                <p className="Info">
                    Stock Disponible: {stock}                    
                </p>     

                <p className="Info">
                    Detalle: {detalle}                    
                </p>                                 
            </section>

            <footer className="ItemFooter">
                {
                    quantityAdded > 0 ? (
                        <Link to="/cart" className="Option">Terminar Compra</Link>
                    ):
                    (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    )

    


}

export default ItemDetail
