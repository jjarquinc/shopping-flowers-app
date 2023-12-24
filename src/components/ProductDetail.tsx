import Image from 'next/image'
import { Button } from './Button'
import { OrderDetail } from '@/types/types'

export const ProductDetail = ({
    product,
    increaseQuantity,
    decreaseQuantity,
    RemoveItemCarShop,
}: {
    product: OrderDetail
    increaseQuantity: (productId: number) => void
    decreaseQuantity: (productId: number) => void
    RemoveItemCarShop: (productId: number) => void
}) => {
    const onClickIncreaseQuantity = () => {
        increaseQuantity(product.id)
    }

    const onClickDecreaseQuantity = () => {
        decreaseQuantity(product.id)
    }

    const onClickRemoveItemCarShop = () => {
        RemoveItemCarShop(product.id)
    }

    return (
        <>
            <section className="flex justify-center items-center  phone:justify-start">
                <Image
                    src={product.imageUrl}
                    width={500}
                    height={500}
                    alt={product.title}
                    className="w-20 h-20 object-cover rounded-md"
                />
            </section>
            <section className="flex justify-center items-center  phone:col-span-1 phone:col-span-4 phone:justify-start">
                {product.title}
            </section>
            <section className="flex justify-center items-center  phone:col-span-1 phone:col-span-4 phone:justify-start">
                {`${product.price.currencyCode} ${product.price.amount}`}
            </section>
            <section className="flex justify-center items-center">
                {product.quantity}
            </section>
            <section className="flex justify-center items-center">
                {`${product.price.currencyCode} ${(
                    product.quantity * product.price.amount
                ).toFixed(2)}`}
            </section>
            <section className="flex justify-center items-center">
                <div className="grid gap-1  laptop:grid-cols-3 phone:grid-rows-3">
                    <Button
                        onClick={onClickIncreaseQuantity}
                        className="bg-blue-100"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                            />
                        </svg>
                    </Button>
                    <Button
                        onClick={onClickDecreaseQuantity}
                        className="bg-blue-100"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 12h14"
                            />
                        </svg>
                    </Button>
                    <Button
                        onClick={onClickRemoveItemCarShop}
                        className="bg-red-100"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </Button>
                </div>
            </section>
        </>
    )
}
