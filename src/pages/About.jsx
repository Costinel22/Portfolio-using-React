import React from 'react';
import Hero from '../components/Hero';
import myHero from '../image/herro.jpg'
import './style.css'
import Row from '../components/Row'
import Col from '../components/Col'
import Container from '../components/Container';
import myAvatar from '../image/me.jpg';
import { GrGithub, GrHtml5, GrCss3, GrReactjs } from "react-icons/gr";
import { TbApi, TbBrandNodejs } from "react-icons/tb";


function About() {
  return (
    <div>
      <Hero backgroundImage={myHero}>
        <Container size="md-12 just sm-12">
          <Row>
            <Col size="md-4 just">
              <h2 id="setName" >G Costinel Malaiasi</h2>
              <h4><a href="https://www.linkedin.com/in/costinel-malaiasi-58510a249">Linkedin</a></h4>
              <h4><a href="https://github.com/Costinel22">GitHub</a></h4>
            </Col>
            <Col size="md-4 just">
              <img src={myAvatar} alt="My Image avatar" style={{ marginTop: '10%', width: '50%', maxWidth: 200 }} />
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
            <Container direction="row">
              <GrGithub style={{ marginRight: '40px' }} color="black" size="60px" />
              <GrHtml5 style={{ marginRight: '40px' }} color="black" size="60px" />
              <GrCss3 style={{ marginRight: '40px' }} color="black" size="60px" />
              <GrReactjs style={{ marginRight: '40px' }} color="black" size="60px" />
              <TbApi style={{ marginRight: '40px' }} color="black" size="60px" />
              <TbBrandNodejs style={{ marginRight: '40px' }} color="black" size="60px" />
              <GrReactjs style={{ marginRight: '40px' }} color="black" size="60px" />
              <GrReactjs style={{ marginRight: '40px' }} color="black" size="60px" />
            </Container>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default About;
