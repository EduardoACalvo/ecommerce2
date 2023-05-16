import React from "react";
import './Header.css';
import PicMesa from './assets/MesaSillaPequeña.jpg'
import PicSillon from './assets/SillonPequeño.jpg'

const Header = () => {
    return(
        <div className="Header">
            <div className="ContenedorTexto">
                <div className="Titulo">
                    <h1>Furniture Style</h1>
                    <h1>For Future</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti voluptas itaque libero soluta nobis natus numquam asperiores laudantium provident eaque! Enim optio porro, architecto quidem modi corrupti temporibus quos officia.</p>
                </div>
                <div className="botones">
                    <button>Get Started</button>
                    <a href="#" className="video"><div className="playicon"><i class="bi bi-play-fill play"></i></div>What video</a>
                </div>
                <div className="seguidores">
                    <div className="seguidor">
                        <h1 className="Numseguidor">150+</h1>
                        <h2 className="Nombreseguidor">Furnitures</h2>
                    </div>
                    <div className="line">
                        <hr className="v-line"/>
                    </div>
                    <div className="seguidor">
                        <h1 className="Numseguidor">100+</h1>
                        <h2 className="Nombreseguidor">Customer</h2>
                    </div>
                </div>
            </div>
            <div className="ContenedorImagenes">
                <img src={PicSillon} alt="Sillon" className="Sillon"/>
                <img src={PicMesa} alt="MesaSilla" className="MesaSilla"/>
            </div>
        </div>
   
    )
}


export { Header }