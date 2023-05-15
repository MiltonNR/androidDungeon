import saludos from "./assets/saludos.png"
import "./assets/ItemListContainer.css"
import { useState, useEffect } from "react"
import { getProducts, getProductsByCategoria } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {

    const [products, setProducts  ] = useState([])

    const {categoriaId} = useParams()

    useEffect (() => {
        const asynFunc = categoriaId ? getProductsByCategoria : getProducts

        asynFunc(categoriaId)
        .then (response => {
            setProducts(response)
        })
        .catch (error => {
            console.error(error)
        })
    }, [categoriaId])

    

    return (
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            <ItemList products={products} />
            <img className="GreetingILC" src= {saludos} alt="androide"/>
        </div>
    )
}

export default ItemListContainer
