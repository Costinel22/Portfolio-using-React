import React from 'react';
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';
import myAvatar from '../../image/avatar.jpg';

function AboutMe() {
  return (
    <div>
      <Container style={{ marginTop: 30, marginLeft: 200}}>
        <Row>
          <Col size="md-4 just">
            <h1>Hello, I am a Web Developrer whit JavaScript.</h1>
            <br />
            <h4>I like challenges and recently I started studying web development using javascript plus different libraries, among these are bootstrap, jQuary, React and more. </h4>
          </Col>
          <Col size="md-4 just">
          <img src={myAvatar} alt="My Image avatar" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMe;
