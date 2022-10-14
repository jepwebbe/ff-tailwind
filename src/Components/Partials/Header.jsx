import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../Assets/Images/copyleft.png"
import Burger from '../../Deprecated/Burger'
const Header = () => {
/*   const [burgerOpen, setBurgerOpen] = useState(true)

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen)
  } */


  return (
    <header className="sm:h-[3rem]  py-0 sm:px-[5rem] px-[1rem] bg-green text-beige sticky top-0 z-1000">
      <nav className="grid grid-cols-2 items-center max-w-[1400px] h-[100%]">
        <Link className="w-[2rem]" to="/"><img className="w-[100%] h-[auto] py-1" src={logo} /></Link>
        <ul className="list-none flex justify-self-end " >
          <li className="py-0 sm:px-[2rem] px-2"><Link className="no-underline" to="/" >Hjem</Link></li>
          <li className="py-0 sm:px-[2rem] px-2"><Link className="no-underline" to="bloglist" >Blog</Link></li>
          <li className="py-0 sm:px-[2rem] px-2"><Link className="no-underline" to="about" >Om</Link></li>
          <li className="py-0 sm:px-[2rem] px-2"><Link className="no-underline" to="contact" >Kontakt</Link></li>
        </ul>
        {/* <div className="sm:hidden fixed top-1 right-[1rem] pt-[10px] z-[100]" onClick={toggleBurger}>
          <Burger isOpen={burgerOpen}/>
        </div> */}
      </nav>
    </header>
  )
}

export default Header