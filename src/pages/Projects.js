import React from 'react'
import { useNavigate } from 'react-router-dom'
import arrowLeft from '../assets/images/arrow-left.png'
import arrowRight from '../assets/images/arrow-right.png'
import mtswSS from '../assets/images/mtsw-ss.png'
import dtSS from '../assets/images/doubles-trouble-ss.png'
import rnrSS from '../assets/images/rollercoasters.png'
import gtsSS from '../assets/images/green-tree-ss.png'

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
        <h1 className="name">David Caldwell</h1>
        <h3 className="subHeader">Projects</h3>
      </div>
      <div className="middle center-container">
        <div className="card-container">
          <div className="project-card">
            <h4>Doubles Trouble</h4>
            <img
              src={dtSS}
              className="project-image"
              alt="Project Screenshot"
            />
            <a
              href="https://doubles_trouble_browser_game.surge.sh/"
              target="_blank"
            >
              Deployed Site
            </a>
            <a
              href="https://github.com/LeaderOfTheLost/doubles_trouble_browser_game"
              target="_blank"
            >
              Github Repo
            </a>
          </div>
          <div className="project-card">
            <h4>More Than Seven Wonders</h4>
            <img
              src={mtswSS}
              className="project-image"
              alt="Project Screenshot"
            />
            <a
              href="https://more-than-seven-wonders.herokuapp.com/"
              target="_blank"
            >
              Deployed Site
            </a>
            <a
              href="https://github.com/LeaderOfTheLost/more_than_seven_wonders"
              target="_blank"
            >
              Github Repo
            </a>
          </div>
          <div className="project-card">
            <h4>Rock-n-Rollercoasters</h4>
            <img
              src={rnrSS}
              className="project-image"
              alt="Project Screenshot"
            />
            <a
              href="https://rock-n-rollercoaster.herokuapp.com/"
              target="_blank"
            >
              Deployed Site
            </a>
            <a
              href="https://github.com/ajluc/Rock-n-roller-coasters"
              target="_blank"
            >
              Github Repo
            </a>
          </div>
          <div className="project-card">
            <h4>Green Tree Schools</h4>
            <img
              src={gtsSS}
              className="project-image"
              alt="Project Screenshot"
            />
            <a href="https://green-tree-school.herokuapp.com/" target="_blank">
              Deployed Site
            </a>
            <a
              href="https://github.com/kalenluciano/student-course-hackathon-frontend"
              target="_blank"
            >
              Github Frontend Repo
            </a>
            <a
              href="https://github.com/James-fleming394/student-course-hackathon-backend"
              target="_blank"
            >
              Github Backend Repo
            </a>
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
