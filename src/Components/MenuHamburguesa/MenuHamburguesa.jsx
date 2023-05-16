import React from "react";
import './MenuHamburguesa.css';

const MenuHamburguesa = () => {
    return(
        <div className="menuhamburguesa">
            <div className="IconosMenuHamburguesa">
                <div className="IconoMenuHamburguesa">
                    <a href="#" className="IconoPerson"><i className="bi bi-person"></i></a>
                    <h2>Account</h2>
                </div>
    
                <hr className="v-line"/>
                
                <div className="IconoMenuHamburguesa">
                    <a href="#"  className="IconoShop"><i className="bi bi-cart3"></i></a>
                    <h2>Shop</h2>
                </div>
            </div>
            <div className="BotonesMenuHamburguesa">
                <a href="#" className="BotonesHamburguesa">Products</a>
                <a href="#" className="BotonesHamburguesa">Contact</a>
                <a href="#" className="BotonesHamburguesa">Term and Conditions</a>
            </div>
        </div> 
    )
}


export { MenuHamburguesa }


