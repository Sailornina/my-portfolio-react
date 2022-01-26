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
          </li>
          <li class="skills-title">
            <FaCss3Alt />
            <li className="skills-title">
              <FaSass />
            </li>
          </li>
          <li class="skills-title">
            <FaJsSquare />
          </li>
          <li class="skills-title">
            <FaReact />
          </li>
          <li class="skills-title">
            <SiNextdotjs />
          </li>
          <li class="skills-title">
             <DiResponsive />
          </li>
          <li class="skills-title">
            <FaNode />
          </li>
        </ul>
      </div>
      <hr />
    </section>
  )
};


export default Skills;