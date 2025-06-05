import './Header.css'
import React from 'react'
import NavBar from './NavBar/NavBar'

function Header({setSelectedCategory}) {
  return (
    <NavBar setSelectedCategory={setSelectedCategory}/>
  )
}

export default Header