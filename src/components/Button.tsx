import { Props } from '../types/types'

export const Button = ({
    children,
    onClick,
    className = 'bg-transparent',
}: Props) => {
    return (
        <button
            onClick={onClick}
            className={`${className} text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded shadow hover:bg-gray-500 hover:text-white hover:border-transparent`}
        >
            {children}
        </button>
    )
}
