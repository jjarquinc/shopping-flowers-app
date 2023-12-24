'use client'

import React, { createContext, useState } from 'react'
import { productService } from '../services/productService'

export const filterProductContext = createContext()

export function FilterProductProvider({ children }) {
    const productList = productService.getProductList()

    const [products, setProducts] = useState(productList)

    return (
        <filterProductContext.Provider value={{ products, setProducts }}>
            {children}
        </filterProductContext.Provider>
    )
}
