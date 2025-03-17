import React from 'react'
import '../styles/Home.css';
import { Navbar } from '../components/Navbar';
import About from './About';
import Experience from './Experience';
import Project from './Project';
import Skills from './Skills';
import Contact from './Contact';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <section id='home' className='section home'>
        <p className='home-subtitle'>Hi, My name is</p>
        <h1 className='home-title'>Brajsundari Rathor</h1>
        <h2 className='home-description'>I build things for the web.</h2>
        <p className='home-description'>I'm a software developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, focused on building accessible, human-centered products. </p>
        {/* <a href="/contact">
            <button className='cta-button'>Contact Me</button>
        </a> */}
        <Link to='/contact'>
        <button className='cta-button'>Contact Me</button>
        </Link>
    </section>
    
    </>
    
  )
}

export default Home
