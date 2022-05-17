import React from 'react'
import { NavLink } from 'react-router-dom'
import mod from './Header.module.css'

function Header() {

    return (
        <div className={mod.navlinksBlockStyle}>
            <NavLink className={mod.navlinkStyle} to="/pre-junior">Pre-junior</NavLink>
            <NavLink className={mod.navlinkStyle} to="/junior">Junior</NavLink>
            <NavLink className={mod.navlinkStyle} to="/junior-plus">Junior+</NavLink>
        </div>
    )
}

export default Header
