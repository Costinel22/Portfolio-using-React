import React from 'react';
import Hero from '../components/Hero';
import myHero from '../image/coffe.jpg'
import './style.css'

function About() {
  return (
    <div>
      <Hero backgroundImage={myHero}>
        <h1 id="setName">Gheorgh Costinel Malaiasi</h1>
        <h2><a href="https://www.linkedin.com/in/costinel-malaiasi-58510a249">Linkedin</a></h2>
        <h2><a href="https://github.com/Costinel22">GitHub</a></h2>
      </Hero>
    </div>
  );
}

export default About;
