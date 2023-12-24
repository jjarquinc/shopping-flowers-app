'use client'

export const Slider = () => {
    const handlerChangeSlider = () => {
        document.getElementsByTagName('html')[0].classList.toggle('dark')
    }

    return (
        <label htmlFor="chkSlider" className="relative w-[50px] h-[18px]">
            <input
                id="chkSlider"
                type="checkbox"
                className="opacity-0 w-0 h-0  [&:checked+div]:bg-gray-700 [&:checked+div:before]:translate-x-7"
                onChange={handlerChangeSlider}
            ></input>
            <div className="bg-yellow-500 border border-gray-200 rounded-[30px] absolute top-[6px] left-0 right-0 bottom-0 cursor-pointer transition-all  before:content-['']] before:absolute before:w-[20px] before:h-[20px] before:top-[-5px] before:left-0 before:bg-gray-400 before:rounded-[50%] before:shadow-lg before:transition-all"></div>
        </label>
    )
}
