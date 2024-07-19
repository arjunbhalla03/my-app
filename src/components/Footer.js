import "./Footerstyles.css"

import React from 'react'

import {FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>8175 E. Hayden Ct.</p>
                        <p>Anaheim, CA, 92808</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    1-714-808-7808</h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                arjunbhalla03@gmail.com</h4>
                </div>
            </div>

            <div className="right">
                <h4>Socials</h4>
                <p>Please feel free to check out my profiles on both LinkedIn and GitHub</p>
                <div className="social">
                <a href="https://www.linkedin.com/in/arjun-bhalla-3bb2aa210/">
                <FaLinkedin size={30} style={{color: "#fff", marginRight: "2rem"}}/>
                </a>
                <a href="https://github.com/arjunbhalla03">
                <FaGithub size={30} style={{color: "#fff", marginRight: "2rem"}}/>
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer