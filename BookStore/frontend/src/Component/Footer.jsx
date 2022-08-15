import { FaLinkedin } from "react-icons/fa"
import { AiFillGithub, AiOutlineMail } from "react-icons/ai"
import "./Footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="footer-info">
        <h2 className="footer-logo">BookStore</h2>{" "}
        <p> by - Sunil Yadav</p>
      </div>
      <div className="social">
        <a href="https://www.linkedin.com/in/sunil-yadav-01a66b126/" target="_blank" className="social-logo"><FaLinkedin /></a>
        <a href="https://github.com/yadavsunil-05" target="_blank" className="social-logo" ><AiFillGithub /></a>
        <a href="#" className="social-logo" ><AiOutlineMail /></a>
      </div>
    </div>
  )
}

export default Footer