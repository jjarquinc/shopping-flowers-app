'use client'

import React, { createContext, useState } from 'react'
import { productService } from '../services/productService'

export const filterProductContext = createContext()

export function FilterProductProvider({ children }) {
    const productList = productService.getProductList()
    const maxAmountProduct = productService.getMaxAmountProduct(productList)

    const [products, setProducts] = useState(productList)
    const [amountFilter, setAmountFilter] = useState(maxAmountProduct)

    return (
        <filterProductContext.Provider
            value={{ products, setProducts, amountFilter, setAmountFilter }}
        >
            {children}
        </filterProductContext.Provider>
    )
}
