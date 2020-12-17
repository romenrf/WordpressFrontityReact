import React from 'react'

export const addToCart = ({ product_id, quantity }) => {
    const checkId = obj => obj.id === product_id
    const currentCatalog = [...catalog]
    if (localCart.some(checkId)) {
        alert('The item you are trying to add is already in your cart!')
        return false
    } else {
        const newCart = currentCatalog.filter((product, productIndex) => {
            return product.id === product_id
        })
        setLocalCart([...localCart, ...newCart])
        localStorage.setItem(
            'vizual_localCart',
            JSON.stringify([...localCart, ...newCart])
        )
    }
}



export default APIwc