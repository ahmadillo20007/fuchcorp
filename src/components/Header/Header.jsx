import React from 'react'
import logo from '../../img/logo.png'
import main from '../../img/main.png'
import './Header.scss'
function Header() {
  return (
    <div className='header'>
        <div className="container">
<div className="wrapper">
<div className="left">
<img src={logo} alt="" />
</div>
<div className="center">
<ul className='center__list'>
    <li>
    About Project
    </li>
    <li>
    Subscriptions
    </li>
    <li>
    FAQ
    </li>
    <li>
    Contact Us
    </li>
</ul>
</div>
<div className="right">
    <button>
    Login
    </button>
    <button>
    Subscribe
    </button>
</div>
</div>
<h1 className='header__text'>
Welcome to Academy
</h1>
<img className='header__img' src={main} alt="" />
        </div>
    </div>
  )
}

export default Header