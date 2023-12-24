export const Footer = () => {
    return (
        <footer className="bg-gray-100 border-t border-t-2 border-yellow-300 transition-all p-4 h-[50px] flex justify-end items-center text-sm  dark:bg-transparent dark:border-gray-100 dark:border-t dark:border-t-4">
            <em className="text-yellow-800 dark:text-white">
                {`Prueba técnica: Mis@el Jarquin - ${new Date().getFullYear()}`}
            </em>
        </footer>
    )
}
