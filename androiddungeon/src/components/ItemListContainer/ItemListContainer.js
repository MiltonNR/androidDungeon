import saludos from "./assets/saludos.png"
import "./assets/ItemListContainer.css"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../service/firebase/firebaseConfig"

const ItemListContainer = ({greeting}) => {

    const [products, setProducts  ] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
        ? query(collection(db,"items"), where("categoria", "==", categoryId))
        : collection(db, "items")

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.doc.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
                .catch (error => {
                    console.log(error)
                })
                .finally(() => {
                    setLoading(false)
                })
            })

            return (
                <div className="ItemListContainer">
                    <h1>{greeting}</h1>
                    <ItemList products={products} />
                    <img className="GreetingILC" src={saludos} alt="androide"/>
                </div>
            )


    }
    
 

export default ItemListContainer

//Logica vieja

    /*useEffect (() => {
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
            <img className="GreetingILC" src={saludos} alt="androide"/>
        </div>
    )
    */