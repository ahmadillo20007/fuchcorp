import React from 'react'
import main from '../../img/main.png'
import './Main.scss'
import i from '../../img/img.png'


function Main() {
  return (
    <div className='main'>
<div className="container">
<div className="img">
<  img  className='main__img' src={main} alt="" />
</div>
    <ul className='main__list'>
<p className='main__out'> 
<span>Compare</span> <br />
Plans
    </p>
    <li>
<div className="inner">
<img src={i} alt="" /> <p> BASIC</p>
</div>
<p className='main__item'>
Hands-on training and learn FuchiCorp’s Infrastructure. In-depth understanding of tools, complete Basic tickets, and learn more troubleshooting skills.
<br />
<span>Three Months of Courses</span>
</p>
<hr className='hr' />
<p className='hr__item'>
<span>$55</span> Per Month
</p>
<button className='main__btn'>Subscribe</button>
<div className="but"><input type="checkbox" /> <p>I Agree to Terms, Conditions & Privacy Policy</p></div>
    </li>
    <li>
<div className="inner">
<img src={i} alt="" /> <p> BASIC</p>
</div>
<p className='main__item'>
Hands-on training and learn FuchiCorp’s Infrastructure. In-depth understanding of tools, complete Basic tickets, and learn more troubleshooting skills.
<br />
<span>Three Months of Courses</span>
</p>
<hr className='hr' />
<p className='hr__item'>
<span>$55</span> Per Month
</p>
<button className='main__btn'>Subscribe</button>
<div className="but"><input type="checkbox" /> <p>I Agree to Terms, Conditions & Privacy Policy</p></div>
    </li>
    <li>
<div className="inner">
<img src={i} alt="" /> <p> BASIC</p>
</div>
<p className='main__item'>
Hands-on training and learn FuchiCorp’s Infrastructure. In-depth understanding of tools, complete Basic tickets, and learn more troubleshooting skills.
<br />
<span>Three Months of Courses</span>
</p>
<hr className='hr' />
<p className='hr__item'>
<span>$55</span> Per Month
</p>
<button className='main__btn'>Subscribe</button>
<div className="but"><input type="checkbox" /> <p>I Agree to Terms, Conditions & Privacy Policy</p></div>
    </li>
    <li>
<div className="inner">
<img src={i} alt="" /> <p> BASIC</p>
</div>
<p className='main__item'>
Hands-on training and learn FuchiCorp’s Infrastructure. In-depth understanding of tools, complete Basic tickets, and learn more troubleshooting skills.
<br />
<span>Three Months of Courses</span>
</p>
<hr className='hr' />
<p className='hr__item'>
<span>$55</span> Per Month
</p>
<button className='main__btn'>Subscribe</button>
<div className="but"><input type="checkbox" /> <p>I Agree to Terms, Conditions & Privacy Policy</p></div>
    </li>
</ul>
</div>
    </div>
  )
}

export default Main