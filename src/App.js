import React from 'react';

import Navbar from './components/Navbar/Navbar';
import About from './container/Cv/Cv';
import Footer from './container/Footer/Footer';
import Header from './container/Header/Header';
import './App.scss';


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
    <Header />
    <About />
    <Footer />
  </div>
  )
}

export default App;