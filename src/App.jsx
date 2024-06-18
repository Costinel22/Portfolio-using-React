import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import CV from './components/CV';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import Projects from './components/ProjectsG';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills';



function App() {
  return ( 
    <>
    <Router>
      <div>
      <Navbar />
        <Wrapper>  
          <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/aboutMe" element={<AboutMe/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/cv" element={<CV/>} />
            <Route path="/skills" element={<Skills/>} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
    </> 
  );
}

export default App;
