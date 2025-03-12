import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Contact from './Contact';
import Projects from './Projects';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <About id="about" />
            <Skills id="skills" />
            <Projects id="projects" />
            <Education id="education" />
            <Contact id="contact" />
        </div>
    );
};

export default Main;