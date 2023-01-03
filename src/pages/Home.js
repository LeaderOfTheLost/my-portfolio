import headshot from "../assets/images/portfolio-pic.jpg"

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
          <h3>DESIGN.</h3>
          <h3>CREATE.</h3>
          <h3>EXPLORE.</h3>
        </div>
      </div>
    </div>
  )
}

export default Home
