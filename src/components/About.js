import React from "react";
import '../styles/main.scss';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'


function About() {
        return (
        <section id="about"> 
        <div>
            <h1>About me</h1>
          <div className="about">
              <strong className="name-about">Hi, I'm Antonella!</strong><br /><br />
              <img alt="profile" src={`${process.env.PUBLIC_URL}/image/profile.jpg`} className="profile" width="470"/>
              <br /><br />
              <p className="paragraph-about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /><br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
              </p>
           </div>
           <div className="links.work">
            <a
              href="#contact"
              className="link.contact">
              Work With Me
            </a><br /><br />
            <a
              href="#projects"
              className="link.projects">
              See My Personal Projects
            </a>
          </div>
          <div className="social-icons">
          <FaGithub />
          <FaLinkedin />
          <FaTwitter />
          </div>
        </div>
        <hr />
        </section>      
        );
    }


export default About;
