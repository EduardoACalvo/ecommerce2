import React from "react";
import './Navbar.css';

const Navbar = () => {
    return(
        <div className="Navbar">
            <h1>Furniture</h1>
            <div className="navbarmenu">
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">Collections</a>
            </div>
            <div className="navbaricono">
                <a href="#"><i className="bi bi-person"></i></a>
                <hr className="v-line"/>
                <a href="#"><i className="bi bi-cart3"></i></a>
            </div>
            <div className="navbarhamburger">
                <a href="#"><i class="bi bi-list hamburguesa"></i></a>
            </div>
           
        </div>
    )
}


export { Navbar }