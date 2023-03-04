import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className={props.darkMode ? "dark" : ""}>
    <div>
        <Link to="/" style={{ textDecoration: 'none' }}><p>Home</p></Link>
        <Link to="/about" style={{ textDecoration: 'none' }}><p>About Us</p></Link>
        <Link to="/news"style={{ textDecoration: 'none' }}><p>News</p></Link>
        <Link to="/contests" style={{ textDecoration: 'none' }}><p>Contests</p></Link>
        <Link to="/council" style={{ textDecoration: 'none' }}><p>SB Council</p></Link>
        <Link to="/joinieee" style={{ textDecoration: 'none' }}><p>JOIN IEEE</p></Link>
    </div>
    <div className="toggler">
        <p className="toggler--light">Light</p>
        <div
            className="toggler--slider"
            onClick={props.toggleDarkMode}>
            <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
    </div>
</nav>

    )
}


