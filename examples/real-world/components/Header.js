import React from 'react'
import HeaderSettings from './header-settings'

const Header = props =>
  <header className="header--main">
    <i className="header__logo icon-already-cool"></i>
    <HeaderSettings user={{logged: false, jokes: []}} />
  </header>

export default Header
