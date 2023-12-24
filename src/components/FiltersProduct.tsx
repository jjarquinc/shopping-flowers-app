export const FiltersProduct = ({
    amountFilter,
    maxAmountProduct,
    handlerChangeAmountFilter,
}: {
    amountFilter: number
    maxAmountProduct: number
    handlerChangeAmountFilter: (
        e: React.KeyboardEvent<HTMLInputElement> & { target: HTMLInputElement }
    ) => void
}) => {
    return (
        <>
            <div className="mb-3">
                <h5 className="text-blue-600  dark:text-white">
                    Filter Amount
                </h5>
                <span className="text-red-600">$0</span>{' '}
                <input
                    type="range"
                    min="0"
                    max={maxAmountProduct}
                    value={amountFilter}
                    step="0.01"
                    onChange={handlerChangeAmountFilter}
                />
                <span className="text-red-600">{`$${amountFilter}`}</span>
            </div>

            {maxAmountProduct != amountFilter && (
                <h4 className="text-purple-600 mb-3  dark:text-white">
                    *** Filtering product list ***
                </h4>
            )}
        </>
    )
}
