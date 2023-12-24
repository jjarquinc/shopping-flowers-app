import { ProductList } from '../components/ProductList'

export default function Home() {
    return (
        <main className="mx-[7%]">
            <section>
                <div className="flex justify-end mb-3">
                    <div>
                        <h1 className="text-2xl text-gray-500  dark:text-white">
                            Product List
                        </h1>
                    </div>
                </div>
                <ProductList></ProductList>
            </section>
        </main>
    )
}
