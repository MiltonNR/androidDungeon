import "./assets/items.css";
import { Link } from "react-router-dom";


const Item = ({id, titulo, autor, precio, stock, imagen}) => {

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
            </section>

            <footer className="ItemFooter">
                <Link className="OptionFooter" to={`/item/${id}`}>Ver detalle</Link>
            </footer>
        </article>
    )

    


}

export default Item 
