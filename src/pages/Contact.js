import emailIcon from "../assets/images/email-icon.png"
import linkedInIcon from "../assets/images/linkedin.png"
import githubIcon from "../assets/images/GithubLogo.png"
import docIcon from "../assets/images/document-icon.png"
import resume from "../assets/MainResume.pdf"

const Contact = () => {
  return (
    <div className="grid-container">
      <div className="header">
        <h1 className="name">David Caldwell</h1>
        <h3 className="subHeader">Contact Me!</h3>
      </div>
      <div className="middle center-container contact-links">
        <div className="contact-card">
          <a
            href="https://www.linkedin.com/in/david-caldwell92/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="social-link-image"
              src={linkedInIcon}
              alt="linkedin icon"
            />
          </a>
          <p>LinkedIn</p>
        </div>
        <div className="contact-card">
          <a
            href="https://github.com/LeaderOfTheLost"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="social-link-image"
              src={githubIcon}
              alt="github icon"
            />
          </a>
          <p>GitHub</p>
        </div>
        <div className="contact-card">
          <a href="mailto: doubledc92@gmail.com">
            <img
              className="social-link-image"
              src={emailIcon}
              alt="email icon"
            />
          </a>
          <p>Email</p>
        </div>
        <div className="contact-card">
          <a href={resume} target="_blank" rel="noreferrer">
            <img
              className="social-link-image"
              src={docIcon}
              alt="document icon"
            />
          </a>
          <p>Resume</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
