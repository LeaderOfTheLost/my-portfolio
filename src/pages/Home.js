import React from 'react'
import { useNavigate } from 'react-router-dom'
import arrowLeft from '../assets/images/arrow-left.png'
import arrowRight from '../assets/images/arrow-right.png'

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
        <h1>David Caldwell</h1>
      </div>
      <div className="middle center-container"></div>
      <div className="right">
        <button className="rightBtn" onClick={handleRightClick}>
          <img className="btnImage" src={arrowRight} alt="arrow-right" />
        </button>
      </div>
    </div>
  )
}

export default Home
