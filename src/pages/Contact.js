import React from 'react'
import { useState } from 'react'
import emailIcon from '../assets/images/email-icon.png'
import linkedInIcon from '../assets/images/linkedin.png'
import githubIcon from '../assets/images/GithubLogo.png'
import arrowLeft from '../assets/images/arrow-left.png'
import arrowRight from '../assets/images/arrow-right.png'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  let navigate = useNavigate()

  const handleLeftClick = () => {
    navigate('/projects')
  }
  const handleRightClick = () => {
    navigate('/')
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
        <h3>Contact Me!</h3>
      </div>
      <div className="middle center-container">
        <a href="https://www.linkedin.com/in/david-caldwell92/">
          <img
            className="social-link-image"
            src={linkedInIcon}
            alt="email icon"
          />
        </a>
        <a href="https://github.com/LeaderOfTheLost">
          <img
            className="social-link-image"
            src={githubIcon}
            alt="email icon"
          />
        </a>
        <a href="mailto: doubledc92@gmail.com">
          <img className="social-link-image" src={emailIcon} alt="email icon" />
        </a>
      </div>
      <div className="right">
        <button className="rightBtn" onClick={handleRightClick}>
          <img className="btnImage" src={arrowRight} alt="arrow-right" />
        </button>
      </div>
    </div>
  )
}

export default Contact
