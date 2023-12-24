import { Inter } from 'next/font/google'
import './globals.css'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { OrderDetailProvider } from '../contexts/OrderDetailContext'
import { FilterProductProvider } from '../contexts/FilterProductsContext'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} grid gap-y-4 transition-all bg-gray-50  dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-600 dark:bg-gradient-to-r`}
            >
                <FilterProductProvider>
                    <OrderDetailProvider>
                        <Header></Header>
                        {children}
                        <Footer></Footer>
                    </OrderDetailProvider>
                </FilterProductProvider>
            </body>
        </html>
    )
}
