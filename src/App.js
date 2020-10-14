import React from 'react';

import Header from './Components/Header'
import SideBar from './Components/SideBar'
import FotoComponent from './Components/FotoComponent'
import Features from './Components/Features'
import Stories from './Components/Stories'
import Homes from './Components/Homes'
import Footer from './Components/Footer'
import Menu from './Components/Menu'

import './sass/main.scss'



function App() {
  return (
    <div className="container">

      <SideBar />
      <Header />
      <FotoComponent />
      <Features />
      <Stories />
      <Homes />
      <Footer />

    </div>
  );
}

export default App;
