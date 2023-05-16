import React from "react";
import './Footer.css';
import SillonFooter2 from './assets/SillonFooter2.jpg'

const Footer = () => {
    return(
        <div className="Footer">
            <div className="espacio"></div>
            <section className="promotion" style= {{backgroundImage: `url(${SillonFooter2})`, backgroundPosition: 'center bottom 30%', backgroundSize: 'cover', filter: 'brightness(0.7)', backgroundColor: '#dbd8d8', width: '70%', margin: 'auto', paddingTop: '3rem', paddingBottom:'3rem'}}>         
                <div className="promotion-img-txt">
                    <p className="promotion-img-txt-title">Get Discount For Our Membership</p>
                    <p className="promotion-img-txt-p">New member will get 20% discount for the first purchase</p>
                    <a className="promotion-button" href="">Join Now</a>
                </div>
            </section>
            <footer>
                <div className="footer-lr">
                    <div className="footer-left">
                        <h2>Furniture</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. id ornare morbi feugiat lectus sapien</p>
                    </div>
                    <div className="footer-right">
                        <div className="footer-menu">
                            <a href="">Home</a>
                            <a href="">Shop</a>
                            <a href="">About</a>
                            <a href="">Offers</a>
                            <a href="">Blogs</a>
                        </div>
                        <p>Sign up for our newsletter</p>
                        <div className="footer-newsletter">
                            <input type="text" className="footer-newsletter-input" placeholder="Your Email Address"/>
                            <input type="submit" className="footer-newsletter-button" value="Join Now"/>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p>All rights reserved uline @2023</p>
                </div>
            </footer>
        </div>
    )
}


export { Footer }