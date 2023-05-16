import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import {Navbar} from './Components/Navbar/Navbar';
import {Header} from './Components/Header/Header';
import { MenuHamburguesa } from './Components/MenuHamburguesa/MenuHamburguesa';
import { SectionBenefits } from './Components/SectionBenefits/SectionBenefits';
import { OurGallery } from './Components/OurGallery/OurGallery';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <SectionBenefits/>
      <OurGallery/>
      <Footer/>
   

    </div>
  )
}

export default App
