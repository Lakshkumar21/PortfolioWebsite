import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <img src="" alt="" />
      <h1><span>I'm Laksh Kumar,</span> a Full Stack Developer.</h1>
      <p>I am a second year Computer Science Engineering student at NSUT, specialising in Mathematics and Computing. Learning and building projects using HTML, CSS, JavaScript, Node.js, MongoDB, and React.
        <br/>
      Actively improving my problem-solving skills through Data Structures and Algorithms in C++.
      </p>
      <div className='hero-action'>
        <div className='hero-connect'>Connect with me</div>
        <div className='hero-resume'>My resume</div>
      </div>
    </div>
  )
}

export default Hero