import ItemCount from "../ItemCount/ItemCount"



const ItemDetail = ({id, titulo, autor, precio, stock, imagen, detalle}) => {

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
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad Agregada:", quantity)}/>
            </footer>
        </article>
    )

    


}

export default ItemDetail
