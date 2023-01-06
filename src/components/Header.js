import React from "react";
import logo from "../assets/images/logo.png";
import "../styles/Header.css";
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className="header-container">
                <img className="logo-img" alt="restaurant logo" src={logo}/>
                <nav className="nav-menu">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Reservations</a></li>
                        <li><a href="#">Order Online</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
export default Header;