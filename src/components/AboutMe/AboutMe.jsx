import React from 'react';
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';
import myAvatar from '../../image/me.jpg';

function AboutMe() {
  return (
    <div>
      <Container style={{ marginTop: 30}} id="aboutMe">
        <Row size="md-12 just">
          <Col size="md-6 just">
            <h1>Hello, I am a Web Developer with JavaScript.</h1>
            <br />
            <h4>I like coding and recently I started studying web development using javascript plus different libraries, among these are bootstrap, jQuary, React and more. </h4>
          </Col>
          <Col size="md-6 just">
          <img src={myAvatar} alt="My Image avatar" style={{width:240}}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMe;
