import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Home(){
    const [data, setData] = React.useState([])      //State for incoming API data


    React.useEffect(() => {
        axios.get('http://localhost:8000').then((response) => {     //useEffect hook for setting our API data
            setData(response.data)
        })
    })
    return (
        <div>

<div id="we-are-ieee">

    <img src="./images/sb_logo_full.png" alt="logo"/>

    <h3> About IEEE </h3>

    <p>

        An IEEE Student Branch just like ours is a part of the broader Institute of Electrical and Electronics Engineers. 
        We are a small community of students who strive to learn about new technologies, develop projects and join or create 
        events through our scholarship years, made by IEEE or other IEEE Student Branches.

    </p>

    <Link to="/about">More about our Student Branch</Link> 

</div>

<div id="news-latest">

    <h3> Latest News </h3>

    <p>

        Here are the latest news...

    </p>
    <div>
    {data.slice(0, 4).map((card) => {               //Keep the first 4 items-news from incoming data
                    return (
                        <div>
                            <h4>{card.newsTitle}</h4>
                            <p>{card.newsUrl}</p>
                            <p>{card.newsTimetoRead}</p>
                            <p>{card.newsDatePublished}</p>
                            <p>{card.newsSection}</p>
                            <img src={card.newsImgSrc} alt="" />
                        </div>
                    )
                })}
</div>
</div>

<div id="projects">

    <h3> Projects </h3>

    <p>

        Want to participate on our ongoing projects? 
        Learn more about them

        <Link to="/projects"> here. </Link>

    </p>

</div>

<div id="visit-us">

    <h3> Meeting Classroom </h3>

    <p>

        Location ...

    </p>

</div>

<div id="join-us">

    <h3> Join Us </h3>

    <p>

        Join today the global community of IEEE and get access to all the student benefits today!
        <Link to="/joinieee"> Join IEEE </Link>

    </p>

</div>

</div>
    )
  }