'use client'

import { productService } from '../services/productService'
import { Product } from '../types/types'
import cardItemStyle from '../styles/cardItem.module.css'

export const ProductList = () => {
    const products = productService.getProductList()

    return (
        <>
            <ul className={cardItemStyle.card_item_list}>
                {products.map((product: Product) => {
                    return <h5 key={product.id}>{product.title}</h5>
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
