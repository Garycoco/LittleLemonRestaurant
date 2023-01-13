import React from "react";
import logo from "../assets/images/logo.png";
import "../styles/Header.css";
import { useState } from "react";
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    const [clicked, setClicked] = useState(false);
    const handleHambugerClick = () => {
        setClicked(!clicked);
    }
    return (
        <>
            <header>
                <nav className="nav-menu">
                    <img className="logo-img" alt="restaurant logo" src={logo} />
                    <div className={clicked ? "nav-items active" : "nav-items"}>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/specials">About</Link></li>
                            <li><Link to="">Reservations</Link></li>
                            <li><NavLink to="/booking">Order Online</NavLink></li>
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