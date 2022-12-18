import React from 'react'
import { useNavigate } from 'react-router-dom'
import arrowLeft from '../assets/images/arrow-left.png'
import arrowRight from '../assets/images/arrow-right.png'
import headshot from '../assets/images/portfolio-pic.jpg'

const Home = () => {
  let navigate = useNavigate()

  const handleLeftClick = () => {
    navigate('/contact')
  }
  const handleRightClick = () => {
    navigate('/about')
  }

  return (
    <div className="grid-container">
      <div className="left">
        <button className="leftBtn" onClick={handleLeftClick}>
          <img className="btnImage" src={arrowLeft} alt="arrow-left" />
        </button>
      </div>
      <div className="header">
        <h1 className="name">David Caldwell</h1>
        <h3 className="subHeader">Software Engineer | Web Developer</h3>
      </div>
      <div className="middle center-container home-center">
        <div className="headshot-container">
          <img className="headshot" src={headshot} alt="headshot" />
        </div>
        <div className="home-words">
          <h3>DESIGN.</h3>
          <h3>CREATE.</h3>
          <h3>EXPLORE.</h3>
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

export default Home
