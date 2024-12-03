import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaSquareTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'




const Footer = () => {
  return (
    <footer>
      <div><img src="/logo.png" alt="logo" /></div>
      <div>
        <h4>Support</h4>
        <ul>
          <li>Faisalabad, Paistan</li>
          <li>crypto@gmail.com</li>
          <li>+92 1231231231</li>
        </ul>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/donate"}>Donate</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4>Follow Us</h4>
        <ul>
          <li>
            <Link to={"/"}> <span><FaSquareTwitter/></span> <span>X(twitter)</span> </Link>
          </li>
          <li>
            <Link to={"/"}> <span><FaInstagram/></span> <span>Instagram</span> </Link>
          </li>
          <li>
            <Link to={"/"}> <span><FaGithub/></span> <span>GitHub</span> </Link>
          </li>
          <li>
            <Link to={"/"}> <span><FaLinkedin/></span> <span>Youtube</span> </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer