import React from 'react'

import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'

export const apiWc = new WooCommerceRestApi({
    url: "http://www.gofioteam.com",
    consumerKey: "ck_574cfebc41f29847e774d99976813406bf70112f",
    consumerSecret: "cs_aea33756b263cb58b7ee94d5dae2004cbfc9802b",
    version: "wc/v3"
})

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