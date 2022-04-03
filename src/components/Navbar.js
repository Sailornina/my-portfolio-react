import React from "react";
import '../styles/styles.scss';

function Navbar() {
    return (
        <header id="navbar">
            <div className="my-name-navbar">
                <a href="#about" className="navbar-name">Antonella Cardozo</a>
             <nav>
                <a href="#projects" className="navbar-projects">My projects</a>
                <a href="#skills" className="navbar-skills">Skills</a>
             </nav>
             <a href="#contact" className="navbar-contact">Contact me</a>
            </div>
        </header>
    );

}

export default Navbar;