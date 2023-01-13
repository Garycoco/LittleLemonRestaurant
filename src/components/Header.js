import React from "react";
import logo from "../assets/images/logo.png";
import "../styles/Header.css";
import { useState } from "react";
import { NavLink } from 'react-router-dom';

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
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Reservations</a></li>
                            <li><a href="#">Order Online</a></li>
                            <li><a href="#">Login</a></li>
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