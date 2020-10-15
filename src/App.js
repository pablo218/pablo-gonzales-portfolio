import React from 'react';

import Header from './Components/Header'
import SideBar from './Components/SideBar'
import FotoComponent from './Components/FotoComponent'
import Skills from './Components/Skills'
import About from './Components/About'
import Proyectos from './Components/Proyectos'
import Footer from './Components/Footer'
import Menu from './Components/Menu'

import './sass/main.scss'



function App() {
  return (
    <div className="container">

      <SideBar />
      <Header />
      <FotoComponent />
      <Skills />
      <About />
      <Proyectos />
      <Footer />

    </div>
  );
}

export default App;
