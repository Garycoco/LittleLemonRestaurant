import React from "react";
import logo from "../assets/images/logo.png";
import "../styles/Header.css";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    const [clicked, setClicked] = useState(false);
    const [option, setOption] = useState(false);
    const handleHambugerClick = () => {
        setClicked(!clicked);
    }
    const handleOptionClick = () => {
        setOption(!option)
    }
    return (
        <>
            <header>
                <nav className="nav-menu">
                    <img className="logo-img" alt="restaurant logo" src={logo} />
                    <div className={clicked ? "nav-items active" : "nav-items"}>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/booking">Reservations</Link></li>
                            <li><Link to="/">Order Online</Link></li>
                            <li><Link to="/">Login</Link></li>
                        </ul>
                    </div>
                    <div className="hamburger">
                        <i className={clicked ? "fas fa-times" : "fas fa-bars"}
                            onClick={handleHambugerClick}></i>
                    </div>
                </nav>
            </header>
        </>
    );
}
export default Header;