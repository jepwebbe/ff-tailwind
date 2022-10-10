import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../Assets/Images/copyleft.png"
const Header = () => {
  return (
    <header className="py-0 px-[5rem] bg-[#73a24e] text-[#f5eec2] sticky top-0 z-1000">
      <nav className="grid grid-cols-2 items-center max-w-[1400px]">
        <Link to="/"><img className="w-[2rem] h-[auto]" src={logo} /></Link>
        <ul className="list-none flex justify-self-end">
          <li className="py-0 px-[2rem]"><Link className="no-underline"to="/" >Hjem</Link></li>
          <li className="py-0 px-[2rem]"><Link className="no-underline"to="bloglist" >Blog</Link></li>
          <li className="py-0 px-[2rem]"><Link className="no-underline"to="about" >Om</Link></li>
          <li className="py-0 px-[2rem]"><Link className="no-underline"to="contact" >Kontakt</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header