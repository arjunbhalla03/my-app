import { Link } from "react-router-dom"
import "./AboutContentStyles.css"

import ProfilePic from "../assets/profilepic.jpg"
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p className="paragraph">
            Hi, my name is Arjun Bhalla. I am in my fourth year at UC San Diego studying computer science, with a career interest in software engineering.
            I have previously worked as an intern at companies such as Veritone and American Family Insurance gaining experiences in various tech stacks including React JS, Java, Python, C++, SQL, etc.
            </p>
    
            <p className="paragraph">If you have any questions about my experiences feel free to reach out and contact me.</p>
            <Link to ="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <img src={ProfilePic} className="img" alt="profile"></img>
            </div>
        </div>
    </div>
  )
}

export default AboutContent