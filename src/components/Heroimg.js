import "./Heroimgstyles.css"

import React from 'react'

import IntroImg from "../assets/heroimg.jpg"

import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src = {IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>HI, I'M ARJUN BHALLA</p>
            <h1>Full-Stack Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg