import React from 'react'
import data from '../data/projects'

export default function Projects(props) {
    const projects = data.map(project => {
        return <div key={project.id}>
            <h1>{project.title}</h1>
            <p>{project.text}</p>
            <img src={project.image} alt="" />
        </div>
    })
    return (
        <div className={`projects-${props.darkMode ? "dark" : ""}`}>
            <div id="main">
                <h2> Our Projects </h2>
                <p>
                    Members of our Student Branch are able to participate in projects in coorperation with ConSeRT lab of University of West Attica
                    to learn about new technologies. Below there is a list of our ongoing projects any member can participate.
                </p>
                <img src="./images/undraw/undraw_Team_collaboration_re_ow29.png" alt="projects" />
                <div class="projects">
                    {projects}
                </div>
            </div>
        </div>
    )
}
