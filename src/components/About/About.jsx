import React from 'react'
import './About.scss'
import man from '../../img/man.png'
import woman from '../../img/women.png'
function About() {
    return (
        <div className='about'>
            <div className="container">
                <h1 className='about__text'>
                    Instructors
                </h1>
              <div className="div">
              <div className="div1">
                    <div className="k">
                        <img src={man} alt="" />
                    </div>
                    <div className="p">
                        <h4>
                            Farkhod Sadykov . <span>FOUNDER | CEO</span>
                        </h4>
                        <p className='p__item'>
                            Founding his own company FuchiCorp in 2018.  Experienced DevOps Engineer and Developer, Farkhod is movitated to create effiencent Cloud enviroments for all customers.Learning and teaching new tools to be well-informed with the competitive and ever changing Cloud technology.
                        </p>
                    </div>
                </div>
              <div className="div1">
                    <div className="k">
                    </div>
                    <div className="p">
                        <h4>
                            Farkhod Sadykov . <span>FOUNDER | CEO</span>
                        </h4>
                        <p className='p__item'>
                            Founding his own company FuchiCorp in 2018.  Experienced DevOps Engineer and Developer, Farkhod is movitated to create effiencent Cloud enviroments for all customers.Learning and teaching new tools to be well-informed with the competitive and ever changing Cloud technology.
                        </p>
                    </div>
                    <img src={man} alt="" />

                </div>
                {/* <div className="div2">
                    <div className="w">
                        <h2>Kelly Salrin  <span>SENIOR DEVOPS ENGINEER | SCRUM MASTER </span></h2>
                        <p>
                        Senior DevOps Engineer and Scrum Master of the FuchiCorp team.<br />   Extensive nexperience with multi-cloud enviroments and Kubernetes <br /> clusters.  
                        </p>
                    </div>
                    <div className="i">
                        <img className='img2' src={woman} alt="" />
                    </div>
                </div> */}
              </div>
            </div>
        </div>
    )
}

export default About