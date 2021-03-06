import React from "react";
import { projects } from "../data";


function Projects() {
    return (
        <section id="projects">
            <div>
                <div>
                    <h1 className="my-projects">My Projects</h1>
                    <p className="p-project">These are projects that I've to build during this time to improve my skills as frontend developer</p>
                </div>
                <div className="projects-container">
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.image}>
                            <article  className="projects-image">
                                <img
                                    alt="foto"
                                    src={project.image}
                                />
                                <div className="project-info">
                                    <h4 className="subtitle-project">{project.subtitle}</h4>
                                    <h3 className="title-project">{project.title}</h3>
                                    <p className="description-project">{project.description}</p>
                                </div>
                            </article>
                        </a>
                    ))}

                </div>
                <hr />
            </div>
        </section>
    )
};

export default Projects;