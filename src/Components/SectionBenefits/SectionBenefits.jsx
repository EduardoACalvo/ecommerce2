import React from "react";
import './SectionBenefits.css';
import Icon1 from './assets/icon.png';
import Icon2 from './assets/Icon_2.png';
import Icon3 from './assets/Icon_3.png'


const SectionBenefits = () => {
    return(
        <div className="SectionBenefits">
            <section className="centro benefitsmobile">
                <h2 className="centro">Benefits Further For You</h2>
                <p className="centro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Nam tincidunt laoreet sem sed pretium. Integer cursus nunc</p>
            </section>
            <section className="inicio centro circlemobile">
            <article className="columna-3 benefitsmobile">
                <img src={Icon1} alt="Icon1" className="Icon1" />
                <h3>Quality product</h3>
                <p>Lorem ipsum dolor sit amet,<br/> consectetur id ornare
                </p> 
            </article>
            <article className="columna-3 benefitsmobile">
                <img src={Icon2} alt="Icon2" className="Icon2" />
                <h3>Free & Fast Shoping</h3>
                <p>Lorem ipsum dolor sit amet,<br/> consectetur id ornare
                </p>        
            </article>
            <article className="columna-3 benefitsmobile">
                <img src={Icon3} alt="Icon3" className="Icon3" />
                <h3>24/4 Support</h3>
                <p>Lorem ipsum dolor sit amet,<br/> consectetur id ornare
                </p> 
            </article>
            </section>
            <section className="circlemobile1 centro">
                <img src={Icon1} alt="Icon1" className="Icon1" />
                <h3>Quality product</h3>
                <p>Lorem ipsum dolor sit amet,<br/> consectetur id ornare
                </p> 
                <img src={Icon2} alt="Icon2" className="Icon2" />
                <h3>Free & Fast Shoping</h3>
                <p>Lorem ipsum dolor sit amet,<br/> consectetur id ornare
                </p>        
                <img src={Icon3} alt="Icon3" className="Icon3" />
                <h3>24/4 Support</h3>
                <p>Lorem ipsum dolor sit amet,<br/> consectetur id ornare
                </p> 
            </section>
            
        </div>
    )
}


export { SectionBenefits }



