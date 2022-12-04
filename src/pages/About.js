import React from 'react'
import { useNavigate } from 'react-router-dom'
import arrowLeft from '../assets/images/arrow-left.png'
import arrowRight from '../assets/images/arrow-right.png'

const About = () => {
  let navigate = useNavigate()

  const handleLeftClick = () => {
    navigate('/')
  }
  const handleRightClick = () => {
    navigate('/projects')
  }

  return (
    <div className="grid-container">
      <div className="left">
        <button className="leftBtn" onClick={handleLeftClick}>
          <img className="btnImage" src={arrowLeft} alt="arrow-left" />
        </button>
      </div>
      <div className="header">
        <h1>David Caldwell</h1>
        <h3>About Me!</h3>
      </div>
      <div className="middle center-container">
        <div className="about-me">
          <p>
            I am a software engineer with a passion for design. My design
            journey started in high school where I found a love for photography
            and editing. I studied graphic design in college before life threw a
            few curveballs my way.
          </p>
          <p>
            After college I took a different route and jumped at the oppotunity
            to become a commercial diver and scuba instructor. I spent the next
            5 years training new divers, fixing and testing equipment, and
            taking on some training of my own.
          </p>
          <p>
            As much as I had enjoyed being a scuba instructor it was time for my
            journey to take another turn. That is when I began studying Computer
            Information Systems.
          </p>
          <p>
            Once I had my degree in CIS, I was left wanting more. I found
            General Assembly and enrolled in their software engineering
            immersive.
          </p>
          <p>
            Now after graduating from GA I use my passion for design,
            collaberation, and accessability to create well rounded, user
            friendly applications.
          </p>
        </div>
      </div>
      <div className="right">
        <button className="rightBtn" onClick={handleRightClick}>
          <img className="btnImage" src={arrowRight} alt="arrow-right" />
        </button>
      </div>
    </div>
  )
}

export default About
