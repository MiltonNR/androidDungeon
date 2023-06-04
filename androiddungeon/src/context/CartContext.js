import { createContext, useState } from "react";

export const CartContext = createContext ({
    cart: []
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)


    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            const cartUpdated = [...cart, { ...item, quantity }]
            const newTotal = computeTotal(cartUpdated)

            setCart(cartUpdated)
            setTotal(newTotal)
        } else {
            console.error("El Producto ya fue agregado")
        }
    }

    const removeItem = (itemId) => {
        const itemQuantity = cart.find(prod => prod.id === itemId).quantity

        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        const newTotal = computeTotal(cartUpdated);

        setCart(cartUpdated)
        setTotal(newTotal)
    }

    const clearCart = () => {
        setCart([])
        setTotal(0)
    }

    const updateQuantity = (itemId, newQuantity) => {
        const cartUpdated = cart.map(prod => {
            if (prod.id === itemId) {
                return {...prod, quantity: newQuantity}
            }   

            return prod
        })

        const newTotal = computeTotal(cartUpdated);

        setCart(cartUpdated)
        setTotal(newTotal)
    }

    const isInCart = (itemId) => {
        return cart.some (prod => prod.id === itemId)
    }

    const computeTotal = (products) => { 
        const value = products.reduce((acc, prod) => (acc + prod.quantity * prod.precio), 0)
        return value.toFixed(2)
    }
    

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, updateQuantity, total }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext