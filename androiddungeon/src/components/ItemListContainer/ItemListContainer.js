import saludos from "./assets/saludos.png"
import "./assets/ItemListContainer.css"
import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) => {

    const [products, setProducts  ] = useState([])

    useEffect (() => {
        getProducts()
        .then (response => {
            setProducts(response)
        })
        .catch (error => {
            console.error(error)
        })
    }, [])

    

    return (
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            <ItemList products={products} />
            <img className="GreetingILC" src= {saludos} alt="androide"/>
        </div>
    )
}

export default ItemListContainer
