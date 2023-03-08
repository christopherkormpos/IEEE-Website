import React from 'react'

export default function Council(props) {
    return (
        <div className={`council-${props.darkMode ? "dark" : ""}`}>
            <h3> Current Branch Council </h3>
            <p>
                Chairperson, Vice-Chairperson, Secretary, Treasurer, Executive Committee Member
            </p>
        </div>
    )
}