import React from 'react'
import logo from '../../img/logo.png'
import './Header.scss'
import { Link } from 'react-router-dom'
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
              <a href="#sub">
              <li>
                About Project
                </li>
              </a>
                <a href="">
                <li>
                  Subscriptions
                </li>
                </a>
                <a href="">
                <li>
                  FAQ
                </li>
                </a>
           <a href="">
           <li>
                  Contact Us
                </li>
           </a>
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