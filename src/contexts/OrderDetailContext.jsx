'use client'

import React, { createContext, useState } from 'react'

export const orderDetailContext = createContext()

export function OrderDetailProvider({ children }) {
    const [orderDetails, setOrderDetails] = useState([])

    return (
        <orderDetailContext.Provider value={{ orderDetails, setOrderDetails }}>
            {children}
        </orderDetailContext.Provider>
    )
}
