import React from "react";
import '../styles/main.scss';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'


function About() {
  return (
    <section id="about">
      <div>
        <h1>About me</h1>
        <div className="about-container">
          <strong className="name-about">Hi, I'm Antonella!</strong><br /><br />
          <img alt="profile" src={`${process.env.PUBLIC_URL}/image/profile.jpg`} className="profile" width="470" />
          <p className="p-about">
            I'm a self-taught Software Developer. I considerer myself as a curious person and passionate about technology, that’s why I also decided to start studying Web Programming through Full Stack Open and The Odin Project but also this year I will start studying a bootcamp called Technigo. I'm continuously improving my skills and I'm eager to keep learning and contribute in a collaborative team/environment. <br /><br />
            I am argentine living in Sweden three years ago. So I'm still studying Swedish and enjoying fika. As for me, I like to watch anime, play Phasmophofia with friends as well as enjoy a day of hiking. I created this website to showcase some of the work I've done so far! Please take a look at my page and have fun! I hope to hear from you soon.<br /><br />
          </p>
        </div>
        <div className="contact-links">
          <a
            href="https://github.com/Sailornina" className="contact-detail">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/antonella-cardozo-187562b7/" className="contact-detail">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/Sailor_Ninax" className="contact-detail">
            <FaTwitter />
          </a>
        </div>
      </div>
      <hr />
    </section>
  );
}


export default About;
