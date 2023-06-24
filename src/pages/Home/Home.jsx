import React from 'react'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Project from '../../components/Project/Project'
import About from '../../components/About/About'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div>
        <Header/>
        <Main/>
        <Project/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Home