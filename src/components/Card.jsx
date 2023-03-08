import React from 'react'

export default function Card(props) {
    return (
        <div className={`card-component-${props.darkMode ? "dark" : ""}`}>
            <div>
                <h4>{props.newsTitle}</h4>
                <p>{props.newsUrl}</p>
                <p>{props.newsTimetoRead}</p>
                <p>{props.newsDatePublished}</p>
                <p>{props.newsSection}</p>
                <img src={props.newsImgSrc} alt="" />
            </div>
        </div>
    )
}