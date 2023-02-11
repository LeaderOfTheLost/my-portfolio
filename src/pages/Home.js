import headshot from "../assets/images/portfolio-pic.jpg"
import { BsFillArrowRightCircleFill } from "react-icons/bs"

const Home = () => {
  return (
    <div className="grid-container">
      <div className="header">
        <h1 className="name">David Caldwell</h1>
        <h3 className="subHeader">Software Engineer | Web Developer</h3>
      </div>
      <div className="middle center-container home-center">
        <div className="headshot-container">
          <img className="headshot" src={headshot} alt="headshot" />
        </div>
        <div className="home-words">
          <h3>Portfolio has been moved!</h3>
          <h3>Please follow the link below!!</h3>
          <div>
            <a href="https://david-caldwell.netlify.app/">
              <BsFillArrowRightCircleFill className="redirectBtn" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
