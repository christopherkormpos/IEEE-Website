import React from 'react'
import data from '../data/sbnews'

export default function News(props) {
    const newsSb = data.map(news => {
        return <div key={news.id}>
            <h1>{news.title}</h1>
            <p>{news.text}</p>
            <img src={news.image} alt="" />
        </div>
    })

    return (
        <div className={`newsSb-${props.darkMode ? "dark" : ""}`}>
            <h2> Student Branch News </h2>
            <p>Here are the latest news of our Student Branch!</p>
            <img src="./images/undraw/undraw_Happy_announcement_re_tsm0.png" alt="news" />
            <div class="news">
                {newsSb}
            </div>
        </div>
    )
}
