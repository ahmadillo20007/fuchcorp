import React from 'react'
import './Login.scss'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className='login'>
      <div className="container">
        <div className="reg">
          <div className="head">
            <img src="https://academy.fuchicorp.com/static/images/fuchi_symbol_rgb-white-2.png" alt="" />
            Login
          </div>
          <div className="main">
            <div className="git">
              <img src="https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner.png" alt="" />
              <Link> Login with Github</Link>
            </div>
            <br />
            <p>preferred login option</p>
            <div className="div"></div>
            <h3>
            Manual Login
            </h3>
            <input type="text" />
            <input type="text" />
     <div className="but">
     <Link>Forgot Passowrd</Link>
            <Link>Login</Link>
     </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
