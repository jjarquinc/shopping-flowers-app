'use client'

import { useContext } from 'react'
import { ProductDetail } from './ProductDetail'

import { orderDetailContext } from '../contexts/OrderDetailContext'
import { OrderDetail } from '@/types/types'

export const OrderDetails = () => {
    const { orderDetails, setOrderDetails } = useContext(orderDetailContext)

    const increaseQuantity = (productId: number) => {
        const newOrderDetails = [...orderDetails]
        const index = orderDetails.findIndex(
            (p: OrderDetail) => p.id == productId
        )

        if (index < 0) return

        const quantity = newOrderDetails[index].quantity
        if (quantity < 10) {
            newOrderDetails[index].quantity += 1
            setOrderDetails(() => newOrderDetails)
        }
    }

    const decreaseQuantity = (productId: number) => {
        const newOrderDetails = [...orderDetails]
        const index = orderDetails.findIndex(
            (p: OrderDetail) => p.id == productId
        )

        if (index < 0) return

        const quantity = newOrderDetails[index].quantity
        if (quantity > 1) {
            newOrderDetails[index].quantity -= 1
            setOrderDetails(() => newOrderDetails)
        }
    }

    const RemoveItemCarShop = (productId: number) => {
        const orderDetailsRemove = orderDetails.filter(
            (p: OrderDetail) => p.id != productId
        )
        setOrderDetails(() => orderDetailsRemove)
    }

    return (
        <>
            <ul>
                {orderDetails.length > 0 && (
                    <li className="grid grid-cols-6 gap-3 mb-3 bg-green-50 p-2  dark:bg-gray-400 dark:text-white  phone:grid-cols-4">
                        <section className="flex justify-center items-center   phone:justify-start">
                            <strong>Ilustration</strong>
                        </section>
                        <section className="flex justify-center items-center  phone:hidden">
                            <strong>Title</strong>
                        </section>
                        <section className="flex justify-center items-center  phone:hidden">
                            <strong>Price</strong>
                        </section>
                        <section className="flex justify-center items-center">
                            <strong>Quantity</strong>
                        </section>
                        <section className="flex justify-center items-center">
                            <strong>SubTotal</strong>
                        </section>
                        <section className="flex justify-center items-center"></section>
                    </li>
                )}
                {orderDetails.map((product: OrderDetail) => {
                    return (
                        <li
                            key={product.id}
                            className="grid grid-cols-6 gap-3 mb-3 text-gray-800  dark:text-white  phone:grid-cols-4 phone:grid-flow-row-dense"
                        >
                            <ProductDetail
                                product={product}
                                increaseQuantity={increaseQuantity}
                                decreaseQuantity={decreaseQuantity}
                                RemoveItemCarShop={RemoveItemCarShop}
                            ></ProductDetail>
                        </li>
                    )
                })}
                {orderDetails.length > 0 && (
                    <li className="grid grid-cols-6 gap-3 mb-3 bg-green-50 p-2  dark:bg-gray-400 dark:text-white  phone:grid-cols-4">
                        <section className="flex justify-end items-center  laptop:col-span-1 laptop:col-span-3">
                            <strong>Total</strong>
                        </section>
                        <section className="flex justify-center items-center">
                            <strong>
                                {orderDetails.reduce(
                                    (ac: number, p: OrderDetail) =>
                                        ac + p.quantity,
                                    0
                                )}
                            </strong>
                        </section>
                        <section className="flex justify-center items-center">
                            <strong>
                                {`${
                                    orderDetails[0]
                                        ? orderDetails[0].price.currencyCode
                                        : ''
                                } ${orderDetails
                                    .reduce((ac: number, p: OrderDetail) => {
                                        return (
                                            ac +
                                            parseFloat(
                                                (
                                                    p.quantity * p.price.amount
                                                ).toFixed(2)
                                            )
                                        )
                                    }, 0)
                                    .toFixed(2)}`}
                            </strong>
                        </section>
                        <section className="flex justify-center items-center"></section>
                    </li>
                )}
            </ul>
            {orderDetails.length == 0 && (
                <article className="text-center text-3xl bg-red-50 p-3 text-gray-700">
                    <strong>EMPTY</strong>
                </article>
            )}
        </>
    )
}
