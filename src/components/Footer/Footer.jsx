import React from 'react'
import './Footer.scss'
import logo from '../../img/logo.png'
import git from '../../img/gt.png'
function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <div className='left'>
                     
<img src={logo} alt="" />
             
                        <li>

                        </li>
                    </div>
                    <div className="center">
                        <ul>
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
<img src={git} alt="" />
<img src={git} alt="" />
<img src={git} alt="" />
                    </div>
                </div>
                <hr />
                <div className="but">
                 
                        <div>
                        ©2022 FuchiCorp LLC. ALL Rights reserved.
                        </div>
                        <div>
                        872.772.0715    |  contact@fuchicorp.com
                        </div>
                        <div>
                        Privacy policy Terms of service
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Footer