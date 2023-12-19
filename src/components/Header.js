import React from 'react'
import '../styles/header.css'
import SearchIcon from '@material-ui/icons/Search'

const Header = () => {
  return (
    <div classBane='header'>
        <div className="header__left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn Icon" />

          <div className="header__search">
            <SearchIcon />
            <input type="text" />
          </div>
        </div>

        <div className="header__right">
          
        </div>
    </div>
  )
}

export default Header