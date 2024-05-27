//import React from 'react'
import { useState } from 'react'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Programs from './Components/Programs/Programs'
import Testimonials from './Components/Testimonials/Testimonials'
import Title from './Components/Title/Title'
import Title1 from './Components/Title/Title1'
import Title2 from './Components/Title/Title2'
import Title3 from './Components/Title/Title3'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'



const App = () => {
  const [playState,setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
         <Title/>
         <Programs/>
      <About setPlayState={setPlayState}/>
      <Title1/>
      <Campus/>
      <Title2/>
      <Testimonials/>
      <Title3/>
      <Contact/>
      <Footer/>
      </div>
     <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
