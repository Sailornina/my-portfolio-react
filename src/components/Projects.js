import React from "react";
import { projects } from "../data";


function Projects() {
    return (
        <section id="projects">
            <div>
                <div>
                    <h1>My Projects</h1>
                    <p>These are projects that I've to build during this time to improve my skills as frontend developer</p>
                </div>
                <div className="container-project">
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.image}>
                            <div>
                                <img
                                    alt="lime"
                                    src={project.image}
                                />
                                <div>
                                    <h2 className="subtitle-project">{project.subtitle}</h2>
                                    <h1 className="title-project">{project.title}</h1>
                                    <p className="description-project">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}

                </div>
                <hr />
            </div>
        </section>
    )
};

export default Projects;