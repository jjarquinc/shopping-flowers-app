import productJSON from '../data/products.json'
import { Product } from '../types/types'

const getProductList = () => {
    const newProducts = productJSON.products.map((p, i: number) => {
        const product: Product = {
            id: i,
            title: p.title,
            imageUrl: p.imageUrl,
            price: {
                amount: parseFloat(p.price.amount),
                currencyCode: p.price.currencyCode,
            },
        }
        return product
    })

    return newProducts
}

const getMaxAmountProduct = (ProductList: Product[]) => {
    return Math.max(...ProductList.map((p) => p.price.amount))
}

export const productService = {
    getProductList,
    getMaxAmountProduct,
}
