'use client'

import { useContext } from 'react'

import { productService } from '../services/productService'
import cardItemStyle from '../styles/cardItem.module.css'

import { CardItem } from './CardItem'
import { CarShop } from './CarShop'
import { FiltersProduct } from './FiltersProduct'

import { orderDetailContext } from '../contexts/OrderDetailContext'
import { filterProductContext } from '../contexts/FilterProductsContext'
import { OrderDetail, Product } from '../types/types'

export const ProductList = () => {
    const productList = productService.getProductList()
    const maxAmountProduct = productService.getMaxAmountProduct(productList)

    const { products, setProducts, amountFilter, setAmountFilter } =
        useContext(filterProductContext)
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

    const handlerChangeAmountFilter = (
        e: React.KeyboardEvent<HTMLInputElement> & { target: HTMLInputElement }
    ) => {
        const amountFilterValue = parseFloat(e.target.value)
        const newProductFilter = productList.filter(
            (p: Product) => p.price.amount <= amountFilterValue
        )

        setAmountFilter(() => amountFilterValue)
        setProducts(() => newProductFilter)
    }

    return (
        <>
            <CarShop orderDetails={orderDetails}></CarShop>
            <FiltersProduct
                amountFilter={amountFilter}
                maxAmountProduct={maxAmountProduct}
                handlerChangeAmountFilter={handlerChangeAmountFilter}
            ></FiltersProduct>
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
