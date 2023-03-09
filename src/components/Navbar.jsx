import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className={props.darkMode ? "dark" : ""}>
            <div>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <img src="../images/romvos.png" className="logo" alt="SB_logo" />
            </Link>
            <div className="content">
                <Link to="/" style={{ textDecoration: 'none' }}><p>Home</p></Link>
                <Link to="/about" style={{ textDecoration: 'none' }}><p>About Us</p></Link>
                <div className="dropdown">
                    <button className="dropbtn">News
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link to="/news" style={{ textDecoration: 'none' }}><p>IEEE Spectrum News</p></Link>
                        <Link to="/news_sb" style={{ textDecoration: 'none' }}><p>Student Branch News</p></Link>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Activities
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link to="/projects" style={{ textDecoration: 'none' }}><p>Student Branch Projects</p></Link>
                        <Link to="/contests" style={{ textDecoration: 'none' }}><p>Contests</p></Link>
                    </div>
                </div>
                <Link to="/council" style={{ textDecoration: 'none' }}><p>SB Council</p></Link>
                <Link to="/joinieee" style={{ textDecoration: 'none' }}><p>JOIN IEEE</p></Link>
                </div>
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


