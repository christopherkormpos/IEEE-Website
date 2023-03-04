import React from 'react'
import data from '../data/sbnews'

export default function News() {
    const newsSb = data.map(news => {
        return <div>
            <p>{news.id}</p>
            <h1>{news.title}</h1>
            <p>{news.text}</p>
            <img src={news.image} alt="" />
        </div>
    })

    return (
        <div>
            <h2> Student Branch News </h2>
            <p>Here are the latest news of our Student Branch!</p>
            <div class="news">
                {newsSb}
            </div>
        </div>
    )
}