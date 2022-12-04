import React from 'react'
import { useNavigate } from 'react-router-dom'
import arrowLeft from '../assets/images/arrow-left.png'
import arrowRight from '../assets/images/arrow-right.png'
import mtswSS from '../assets/images/mtsw-ss.png'

const Projects = () => {
  let navigate = useNavigate()

  const handleLeftClick = () => {
    navigate('/about')
  }
  const handleRightClick = () => {
    navigate('/contact')
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
        <div className="card-container">
          <div className="project-card">
            <div className="project-left">
              <h4>More Than Seven Wonders</h4>
              <img
                src={mtswSS}
                className="project-image"
                alt="Project Screenshot"
              />
            </div>
            <div className="project-right">
              <a href="https://more-than-seven-wonders.herokuapp.com/">
                Deployed Site
              </a>
              <a>Github Repo</a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-left">
              <h2>Project Name</h2>
              <img src="" alt="Project Screenshot" />
            </div>
            <div className="project-right">
              <a>Deployed Site</a>
              <a>Github Repo</a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-left">
              <h2>Project Name</h2>
              <img src="" alt="Project Screenshot" />
            </div>
            <div className="project-right">
              <a>Deployed Site</a>
              <a>Github Repo</a>
            </div>
          </div>
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

export default Projects
