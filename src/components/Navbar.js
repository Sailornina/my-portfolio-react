import React from "react";
import '../styles/main.scss';

function Navbar() {
    return (
        <header id="navbar">
            <div className="my-name-navbar">
             <nav>
                <a href="#projects" className="navbar-projects">My projects</a>
                <a href="#skills" className="navbar-skills">Skills</a>
                <a href="#contact" className="navbar-contact">Contact me</a>
             </nav>
            </div>
        </header>
    );

}

export default Navbar;