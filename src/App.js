import React from 'react';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Jobs from './components/Jobs';
import Footer from './components/Footer';
export default function App(){
    return(
        <>
      {/*   Nav Bar */}
      
      <header className='header-scrolled'>
            <nav>
            <img src='img/illustrations/logo.png' alt='logo' />
            <div className='nav'>
                <a className='navItems' href="#home" >Home</a>
                <a className='navItems' href="#services" >Services</a>
                <a className='navItems' href="#about" >About</a>
                <a className='navItems' href="#jobs" >Jobs</a>
            </div>
            <button className='btn-nav'>Contact</button>
            </nav>
        </header>

        {/* Secciones */}
        <section id='home'><Home/></section>
        <section id='services'><Services/></section>
        <section id='about'><About/></section>
        <section id='jobs'><Jobs/></section>

        <Footer/>
        </>
    )
}