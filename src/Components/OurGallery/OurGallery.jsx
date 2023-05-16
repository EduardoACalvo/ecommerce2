import React from "react";
import './OurGallery.css';
import FotoGaleria from './assets/section_our_gallery.png';


const OurGallery = () => {
    return(
        <div className="OurGallery">        
            <div className="inicio2">
                <h2 className="centro">Our Gallery</h2>
            </div>
            <section className="inicio2">
                <hr/>
                <div className="columna-4">
                    <button className="accordion"><strong>Sofa</strong></button>
                    <div className="panel">
                        <p>Sofa</p>
                        <p>Sofa</p>
                        <p>Sofa</p>
                        <p>Sofa</p>
                        <p>Sofa</p>
                    </div>
                    <button className="accordion"><strong>Cofee Table</strong></button>
                    <div className="panel">
                        <p>Cofee Table</p>
                        <p>Cofee Table</p>
                        <p>Cofee Table</p>
                        <p>Cofee Table</p>
                    </div>
                    <button className="accordion"><strong>Chest of Drawers</strong></button>
                    <div className="panel">
                        <p>Chest of Drawers</p>
                        <p>Chest of Drawers</p>
                        <p>Chest of Drawers</p>
                        <p>Chest of Drawers</p>
                    </div>
                    <button className="accordion"><strong>Dining Room table</strong></button>
                    <div className="panel">
                        <p>Dining Room table</p>
                        <p>Dining Room table</p>
                        <p>Dining Room table</p>
                        <p>Dining Room table</p>
                    </div>
                    <button className="accordion"><strong>Wardrobe</strong></button>
                    <div className="panel">
                        <p>Wardrobe</p>
                        <p>Wardrobe</p>
                        <p>Wardrobe</p>
                        <p>Wardrobe</p>
                    </div>
                </div>
                <div className="columna-3b">
                    <img src={FotoGaleria} alt="ourgallery" className="ourgallerymobile" />
                </div>
            </section>
        
            <div className="columna-3b">
                <img className="ourgallerymobiledisplay" src={FotoGaleria}/>
            </div>
      
        </div>
    )
}


export { OurGallery }