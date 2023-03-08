import React from 'react'

export default function About(props) {
    return (
        <div className={`about-${props.darkMode ? "dark" : ""}`}>
            <h3> We Are IEEE </h3>
            <p>
                The IEEE Student Branch of the University of West Attica was founded at the beginning of 2011.
            </p>
            <p>
                It was a joint initiative of students from different faculties that shared a common goal: The mission of this student branch was, and still is,
                to encourage more people to get involved in the world of technology through various activities that concern technological innovations,
                which could perhaps impact the future.
            </p>
            <p>
                The UniWa IEEE Student Branch, which carries the name of IEEE, the world’s leading professional association for the advancement of technology,
                is housed in the 2nd Campus of the University of West attica at the area of Archaios Elaionas, in the city of Egaleo.
            </p>
            <p>
                The group of undergraduate and post-graduate students who are either involved with technology, and its breakthroughs, or love technology and
                are excited with projects regarding that department, includes people of the following majors:
            </p>
            <ul>
                <li> Electrical & Electronics Engineering </li>
                <li> Informatics & Computer Engineering </li>
                <li> Biomedical Engineering </li>
                <li> Industrial Design & Production Engineering </li>
            </ul>
            <p>
                Our next step is to welcome more people in the world of technology which is vastly growing, as well as, always changing for the benefit of humanity!
            </p>
            <h3> What is IEEE</h3>
            <p>
                The Institute of Electrical and Electronics Engineers (IEEE) is the world’s largest technical professional organization dedicated to advancing technology
                for the benefit of humanity. IEEE and its members inspire a global community through its highly cited publications, conferences, technology standards,
                and professional and educational activities.
            </p>
            <p>
                More about ieee on the official website:
                <a href="https://www.ieee.org/about/at-a-glance.html" target="_blank" rel="noreferrer"> https://www.ieee.org/about/at-a-glance.html </a>
            </p>
        </div>
    )
}