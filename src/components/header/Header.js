import React from "react";
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <Link to='/'><img className="header_icon" src="https://cdn-icons-png.flaticon.com/512/5977/5977585.png" /></Link>
                <Link to='movies/popular' style={{textDecoration:'none'}}><span>Popular</span></Link>
                <Link to='movies/top-rated' style={{ textDecoration: 'none' }}><span>Top-rated</span></Link>
                <Link to='movies/upcoming' style={{ textDecoration: 'none' }}><span>Upcoming</span></Link>
            </div>
        </div>
    )
}

export default Header