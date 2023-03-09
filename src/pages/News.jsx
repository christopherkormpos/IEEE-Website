import React from 'react'
// eslint-disable-next-line no-unused-vars
import axios from 'axios';

export default function News(props){
    const [data, setData] = React.useState([])      //State for incoming API data


    React.useEffect(() => {
        axios.get('http://localhost:8000').then((response) => {     //useEffect hook for setting our API data
            setData(response.data)
        })
    })

    return (

        data.length > 0 ?               //Ternary operator
        <div className={`news-${props.darkMode ? "dark" : ""}`}>   
                {data.map((card) => {
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

            : <div>Loading Latest IEEE Spectrum News</div>

        


    )

  }
