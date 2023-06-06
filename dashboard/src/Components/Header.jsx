import React from 'react'
import { Link } from 'react-router-dom'
import "../style/Header.scss"
import {HashLink} from  "react-router-hash-link"



function Header() {
  return (
    <>
 

    <nav>
    <h1>Tecfortify...</h1>
    <main>
    <HashLink to={"/#home"}>Home</HashLink>
    <HashLink to={"/contact"}>Contact</HashLink>
    <HashLink to={"/#about"}>About</HashLink>
    <HashLink to={"/#brands"}>Brands</HashLink>
    <HashLink to="/services">Service</HashLink>
   
       
    </main>
    </nav>
   
    </>
  )
}

export default Header