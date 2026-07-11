import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Resume from '../components/Resume';
import About from '../components/About';
import Education from '../components/Education';
import Skills from '../components/Skills';
import DSA from '../components/DSA';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import GitHub from '../components/GitHub';
import Journey from '../components/Journey';
import Roadmap from '../components/Roadmap';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const MainPortfolio = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Resume />
            <About />
            <Education />
            <Skills />
            <DSA />
            <Experience />
            <Projects />
            <GitHub />
            <Journey />
            <Roadmap />
            <Certificates />
            <Contact />
            <Footer />
        </>
    );
};

export default MainPortfolio;
