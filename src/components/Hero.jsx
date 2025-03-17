import React from 'react'
import { Navbar } from '../components/Navbar';
import About from '../pages/About';
import Experience from '../pages/Experience';
import Project from '../pages/Project';
import Skills from '../pages/Skills';
import Contact from '../pages/Contact';
import Home from '../pages/Home';

const Hero = () => {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Experience />
    <Project />
    <Skills />
    <Contact />
    </>
  )
}

export default Hero
