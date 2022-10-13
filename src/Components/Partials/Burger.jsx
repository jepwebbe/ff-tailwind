import React, { useState } from 'react'


const Burger = ( {isOpen} ) => {
    return (
        <>
            <div className="w-[2rem] h-[2rem] flex justify-around flex-col-nowrap">
                <div className="burger burger1 w-[2rem] h-[0.25rem] rounded-[10px] bg-[black] origin-[1px] transition-all duration-300"></div>
                <div className="burger burger2 w-[2rem] h-[0.25rem] rounded-[10px] bg-[black] origin-[1px] transition-all duration-300"></div>
                <div className="burger burger3 w-[2rem] h-[0.25rem] rounded-[10px] bg-[black] origin-[1px] transition-all duration-300"></div>
            </div>
        </>
    )
}
// https://khuang159.medium.com/creating-a-hamburger-menu-in-react-f22e5ae442cb
export default Burger