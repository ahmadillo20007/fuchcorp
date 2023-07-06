import React from 'react'
import './Login.scss'
import { Link, useNavigate } from 'react-router-dom'
function Login() {


  const navigate = useNavigate()
function fnIn (e) {
  e.preventDefault()
  fetch('https://647092d63de51400f7248a57.mockapi.io/login' ,{
    method: 'POST',
    headers: {'Content-type' : 'Application/json' },
    body : JSON.stringify({login : e.target.login.value , password: e.target.password.value})
  })
  .then((res)=> res.json())
  .then((data)=> {
    if(data.status == true){
navigate('/')
window.localStorage.setItem( 'key', data.token )
    }
  })
}

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
          <form action="#">
          <input onSubmit={fnIn} placeholder='Username' type="text" name='login' />
            <input placeholder='Password' type="password" name='password' />
          </form>
     <div className="but">
     <Link>Forgot Passowrd</Link> 
     
     </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
