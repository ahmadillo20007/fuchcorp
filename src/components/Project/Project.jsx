import React from 'react'
import './Project.scss'
import team from '../../img/team.png'
function Project() {
  return (
    <div className='project'>
        <div className="container">
            <div className="innerr">
          
<div className="text">
<h6 className='text__item'>
       collaborate  with us

       </h6>
                
                <h2 className='text__main'>
                About the Project
                </h2>
                <p className='text__text'>
                Do you want hands-on experience with leading DevOps tools?  Would you like the opportunity to learn in a working environment? 
                <br /><br />
Come and join us! Learn, contribute and expand your knowledge in IT with FuchiCorp Academy. 
<br /><br />
Gain hands-on experinece with these tools:
Kubernetes, Docker, Helm, Packer, Terraform, Jenkins (CI/CD), Nexus, Prometheus, Grafana, ELK Stack, Cert-manager, Ingress Controller, External DNS, Sonarqube, Rancher, Lens and more!
<br /><br />
We offer live online classes, videos, help and guidance on all professional experience levels. Check out our subscriptions above for more information for each or contact us!



                </p>
                <p className='text__label'>
                Subscribe to our mail list & find out latest news
                </p>
                <input className='text__inp' type="text" name="" id="" /> <br />
                <button className='text__btn'>subscribe</button>
</div>
            <div className="img">
              <img className='project__img' src={team} alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Project