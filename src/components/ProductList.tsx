'use client'

import { useContext } from 'react'
import cardItemStyle from '../styles/cardItem.module.css'

import { CardItem } from './CardItem'
import { CarShop } from './CarShop'
import { orderDetailContext } from '../contexts/OrderDetailContext'
import { filterProductContext } from '../contexts/FilterProductsContext'
import { OrderDetail, Product } from '../types/types'

export const ProductList = () => {
    const { products } = useContext(filterProductContext)
    const { orderDetails, setOrderDetails } = useContext(orderDetailContext)

    const checkProductAddedToCarShop = (productId: number) => {
        return orderDetails.some((p: Product) => p.id == productId)
    }

    const addItemCarShop = (product: Product) => {
        setOrderDetails((prevOrderDetails: OrderDetail[]) => [
            { ...product, quantity: 1 },
            ...prevOrderDetails,
        ])
    }

    const removeItemCarShop = (productId: number) => {
        const orderDetailRemove = orderDetails.filter(
            (p: Product) => p.id != productId
        )
        setOrderDetails(() => orderDetailRemove)
    }

    return (
        <>
            <CarShop orderDetails={orderDetails}></CarShop>
            <ul className={cardItemStyle.card_item_list}>
                {products.map((product: Product) => {
                    return (
                        <CardItem
                            key={product.id}
                            product={product}
                            addItemCarShop={addItemCarShop}
                            removeItemCarShop={removeItemCarShop}
                            checkProductAddedToCarShop={
                                checkProductAddedToCarShop
                            }
                        ></CardItem>
                    )
                })}
            </ul>

            {products.length == 0 && (
                <article className="text-center text-3xl bg-red-50 p-3 text-gray-700">
                    <strong>EMPTY</strong>
                </article>
            )}
        </>
    )
}
