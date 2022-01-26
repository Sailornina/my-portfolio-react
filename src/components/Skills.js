import React from "react";

import { FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaSass, FaNode } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si';
import { DiResponsive } from 'react-icons/di';

function Skills() {
  return (
    <section id="skills">
      <h1>Skills</h1>
      <div>
        <ul class="skills-container">
          <li class="skills-title">
            <FaHtml5 />
            <p>HTML5</p>
          </li>
          <li class="skills-title">
            <FaCss3Alt />
            <p>CSS</p>
            </li>
          <li className="skills-title">
              <FaSass />
              <p>SASS</p>
            </li>
          <li class="skills-title">
            <FaJsSquare />
            <p>JavaScript</p>
          </li>
          <li class="skills-title">
            <FaReact />
            <p>React.js</p>
          </li>
          <li class="skills-title">
            <SiNextdotjs />
            <p>Next.js</p>
          </li>
          <li class="skills-title">
             <DiResponsive />
             <p>Responsive Design</p>
          </li>
          <li class="skills-title">
            <FaNode />
            <p>Node.js</p>
          </li>
        </ul>
      </div>
      <hr />
    </section>
  )
};


export default Skills;