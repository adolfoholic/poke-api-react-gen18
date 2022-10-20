import React from 'react'
import './styles/header.css'

const Header = () => {
  return (
    <header className="header">
    <div className="header__red">
        <div className="header__black"></div>
        <div className="header__circle">
            <div className="header__circle-int"></div>
        </div>
    </div>
    <img className="header__title" src="/images/home/pokedex.png" alt=""/>
</header>
  )
}

export default Header