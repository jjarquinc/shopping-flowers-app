import React from 'react'

export interface Props extends React.HTMLAttributes<Element> {}

export interface Price {
    currencyCode: string
    amount: number
}

export interface Product {
    id: number
    title: string
    imageUrl: string
    price: Price
}

export interface OrderDetail extends Product {
    quantity: number
}
