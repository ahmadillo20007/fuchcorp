import React from 'react'
import logo from '../../img/logo.png'
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
            <button className='login'>
              Login
            </button>
            <button className='sub'>
              Subscribe
            </button>
          </div>
        </div>
              <ul className='center__list__med'>
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
        <h1 className='header__text'>
          Welcome to Academy
        </h1>
      </div>
    </div>
  )
}

export default Header