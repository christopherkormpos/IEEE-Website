import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import projects from '../data/projects'

export default function Home(props) {
    const [data, setData] = React.useState([])      //State for incoming API data


    React.useEffect(() => {
        axios.get('http://localhost:8000').then((response) => {     //useEffect hook for setting our API data
            setData(response.data)
        })
    })

    return (
        <main className={`main-${props.darkMode ? "dark" : ""}`}>
            <div id="we-are-ieee">
                <div className="welcome">
                <img src="../images/romvos.png" alt="logo" />
                <h3> Welcome to the official website of IEEE University of West Attica Student Branch </h3>
                </div>
                <div className='content1'>
                <p>
                    An IEEE Student Branch just like ours is a part of the broader Institute of Electrical and Electronics Engineers.
                    We are a small community of students who strive to learn about new technologies, develop projects and join or create
                    events through our scholarship years, made by IEEE or other IEEE Student Branches.
                </p>
                <img src="./images/undraw/undraw_engineering_team.svg" alt="" />
                </div>
                <Link to="/about">
                    <button>
                        More about our Student Branch
                    </button>
                </Link>
                
            </div>
            <div id="news-latest">
                <div className="news-latest">
                <h3> Latest IEEE Spectrum News </h3>
                <p>
                    Here are the latest news from IEEE Spectrum extracted from our own unique API
                </p>
                </div>
                <div>
                    {data.slice(0, 4).map((news) => {               //Keep the first 4 items-news from incoming data
                        return (
                            <div className='card'>
                                <a href={news.newsUrl} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                                <h4>{news.newsTitle}</h4>
                                <div className='paragraphs'>
                                <p>Category : {news.newsSection}</p>
                                <p>{news.newsTimetoRead}</p>
                                
                                </div>
                                <img src={news.newsImgSrc} alt="" />
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='content2'>
            <img src="./images/undraw/undraw_react.svg" alt="" />
            <p>In IEEE we are passionate about using the latest and most recent technologies and this website is no exception.
                One of the trends in Web Development with a huge community behind it has been used and this trend can be no other than React!
                In UniWa Student Branch we really like challenging our own selfs in topics like programming and engineering as well as
                showing the world what we are capable of!
            </p>
            </div>
            <div id="projects">
                <div className='latest-projects'>
                <h3>Projects</h3>
                <p>The branchs' latest completed or ongoing projects</p>
                </div>
                <div>
                    {projects.slice(0, 4).map((projects) => {               //Keep the first 4 projects from incoming data
                        return (
                            <div className='project'>
                                <h4>{projects.title}</h4>
                                <img src={projects.image} alt="" />
                            </div>
                        )
                    })}
                </div>
                <div className='content3'>
                <p>Interested in any of our ongoing projects? <br />
                    Let us know by mailing us in our email address ,<br />
                    or learn more about them by pressing the button below
                </p>
            <img src="./images/undraw/undraw_lightbulb_moment.svg" alt="" />
            </div>
                    <Link to="/projects">
                        <button>
                            Take me to Projects
                        </button>
                    </Link>
                
            </div>
            <div id="visit-us">
                    <div className='content4'>
                    <img src="./images/uniwa.png" alt="" />
                <p>
                <img src="./images/pin.png" alt="signup" style={{ width: '20px' ,height:'30px' }}/>
                <br />
                    We are located in The University of West Attica Campus 2 and more specificly on the ground floor
                    of Z building (classroom ZB014)
                </p>
                
                </div>
            </div>
            <div id="join-us">
                <h3 className='join'> Join Our Community today! </h3>
                <div className='content5'>
                <p>
                    Join today the always growing family of our Student Branch and the global community of IEEE to
                     get access to all the student benefits today!</p>
                     <img src="./images/undraw/undraw_happy_announcement.svg" alt="signup" />
                     </div>
                    <Link to="/joinieee">
                        <button>
                            Join IEEE
                        </button>
                    </Link>
            </div>
        </main>
    )
}
