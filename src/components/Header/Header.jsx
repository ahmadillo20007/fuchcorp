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
              <a href="/login">
              <li>
                About Project
                </li>
              </a>
                <a href="#sub">
                <li>
                  Subscriptions
                </li>
                </a>
                <a href="/login">
                <li>
                  FAQ
                </li>
                </a>
           <a href="/login">
           <li>
                  Contact Us
                </li>
           </a>
              </ul>
            </div>

          <div className="right">
            <a href="/login">
            <button className='login'>
              Login
            </button>
            </a>
            <a href="#sub">
            <button className='sub'>
              Subscribe
            </button>
            </a>
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