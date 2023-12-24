'use client'

import Image from 'next/image'
import { Button } from './Button'
import { Product } from '../types/types'

export const CardItem = ({
    product,
    addItemCarShop,
    removeItemCarShop,
    checkProductAddedToCarShop,
}: {
    product: Product
    addItemCarShop: (product: Product) => void
    removeItemCarShop: (productId: number) => void
    checkProductAddedToCarShop: (productId: number) => boolean
}) => {
    const setIconButtonCarShop = () => {
        if (!checkProductAddedToCarShop(product.id))
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                    />
                </svg>
            )
        else
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                    />
                </svg>
            )
    }

    const onClick = () => {
        if (!checkProductAddedToCarShop(product.id)) addItemCarShop(product)
        else removeItemCarShop(product.id)
    }

    const textColorClass = checkProductAddedToCarShop(product.id)
        ? 'text-red-500 focus:text-red-500'
        : ''

    return (
        <li className="border rounded-md grid gap-y-2 p-2 shadow-md  bg-gradient-to-r from-rose-100 to-teal-100">
            <Image
                src={product.imageUrl}
                alt={product.title}
                width={500}
                height={500}
                className="w-full h-auto object-cover min-h-[300px]"
            />
            <section className="flex justify-around">
                <h2>
                    <strong>{product.title}</strong>
                </h2>
                <h2>
                    <strong>{`${product.price.currencyCode} ${product.price.amount}`}</strong>
                </h2>
            </section>
            <div className="flex justify-center items-center">
                <Button onClick={onClick} className={textColorClass}>
                    <div className="flex">
                        {setIconButtonCarShop()}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                        </svg>
                    </div>
                </Button>
            </div>
        </li>
    )
}
