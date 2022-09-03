import React, { useState } from 'react';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Jobs from './components/Jobs';
import Footer from './components/Footer';
export default function App(){
    const [open,setOpen]=useState(false)
    return(
        <>
      {/*   Nav Bar */}
      
      <header className='header-scrolled'>
            <nav>
            <i onClick={()=>setOpen(!open)} className='bx bx-menu bx-md'></i>
            <img src='img/illustrations/logo.png' alt='logo' className='img-logo logo-pc'/>
            <img src='img/illustrations/logo-white.png' alt='logo' className='img-logo logo-mobil'/>
            <div className='nav'>
                <a className='navItems' href="#home" >Home</a>
                <a className='navItems' href="#services" >Services</a>
                <a className='navItems' href="#about" >About</a>
                <a className='navItems' href="#jobs" >Jobs</a>
            </div>
            <button className='btn-nav'>Contact</button>
            </nav>
            {open?<div className='modal'>
                <div className='modal-item' onClick={()=>setOpen(false)}><a className='navItems' href="#home" >Home</a></div>
                <div className='modal-item' onClick={()=>setOpen(false)}><a className='navItems' href="#services" >Services</a></div>
                <div className='modal-item' onClick={()=>setOpen(false)}><a className='navItems' href="#about" >About</a></div>
                <div className='modal-item' onClick={()=>setOpen(false)}><a className='navItems' href="#jobs" >Jobs</a></div>
            </div>:null}
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