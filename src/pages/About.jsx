import React from 'react';
import Hero from '../components/Hero';
import myHero from '../image/herro2.jpg'
import './style.css'
import Row from '../components/Row'
import Col from '../components/Col'
import Container from '../components/Container';
import myAvatar from '../image/avatar2.png';
import { GrGithub, GrHtml5, GrCss3, GrReactjs, GrGrommet } from "react-icons/gr";
import { TbApi, TbBrandNodejs, TbJson } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";


function About() {
  return (
    <div>
      <Hero backgroundImage={myHero}>
        <Container size="md-12 just ">
          <Row>
            <Col size="md-4 just">
              <h2 id="setName" >G Costinel Malaiasi</h2>
              <h4><a href="https://www.linkedin.com/in/costinel-malaiasi-58510a249">Linkedin</a></h4>
              <h4><a href="https://github.com/Costinel22">GitHub</a></h4>
            </Col>
            <Col size="md-4 just">
              <img src={myAvatar} alt="My Image avatar" style={{ marginTop: '10%', width: '70%', maxWidth: 200 }} />
            </Col>
          </Row>
        </Container>
      </Hero>
      <div className="details-container">
        <Container>
          <h3>Details</h3>
          <p>Hello, I am very happy about your visit to this portfolio, even if it is only at the beginning of the road, just like me, it will become very consistent over time.</p>
          <p>At first it will include only a few recent projects from Front End Web Development, but over time projects from different fields will be included, such as AI and Robotics.</p>
        </Container>
        <div>
          <Container>
            <p>In the projects presented on the projects page, we have different technologies and languages used, for example!</p>
            <Container direction="row" style={{ display: 'flex' }} md-12 md-6 just>
              <div style={{ marginRight: '40px', textAlign: 'center' }}>
                <GrGithub color="black" size="50px" />
                <p>Github</p>
              </div>
              <div style={{ marginRight: '40px', textAlign: 'center' }}>
                <GrHtml5 color="black" size="50px" />
                <p>HTML5</p>
              </div>
              <div style={{ marginRight: '40px', textAlign: 'center' }}>
                <GrCss3 color="black" size="50px" />
                <p>CSS3</p>
              </div>
              <div style={{ marginRight: '40px', textAlign: 'center' }}>
                <GrReactjs color="black" size="50px" />
                <p>React</p>
              </div>
            </Container>
            <Container direction="row" style={{ display: 'flex' }} md-12 md-6 just>
              <div style={{ marginRight: '40px', textAlign: 'center' }}>
                <TbApi color="black" size="50px" />
                <p>API</p>
              </div>
              <div style={{ marginRight: '40px', textAlign: 'center' }}>
                <TbBrandNodejs color="black" size="50px" />
                <p>Node.js</p>
              </div>
              <div style={{ marginRight: '40px', textAlign: 'center' }}>
                <TbJson color="black" size="50px" />
                <p>JSON</p>
              </div>
              <div style={{ marginRight: '40px', textAlign: 'center' }}>
                <FaBootstrap color="black" size="50px" />
                <p>Bootstrap</p>
              </div>
            </Container>
            <Container direction="row" style={{ display: 'flex' }} md-12 md-6 just>
              <div style={{ marginRight: '40px', textAlign: 'center' }}>
                <GrGrommet color="black" size="50px" />
                <p>Grommet</p>
              </div>
            </Container>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default About;
