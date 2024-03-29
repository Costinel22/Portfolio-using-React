import React from 'react';
import Hero from '../components/Hero';
import myHero from '../image/coffe.jpg'
import './style.css'
import Row from '../components/Row'
import Col from '../components/Col'
import Container from '../components/Container';
import myAvatar from '../image/me.jpg';

// function About() {
//   return (
//     <div>
//       <Hero backgroundImage={myHero}>
//       <Container style={{ marginTop: 30 }} size="md-12 just">
//         <Row>
//           <Col size="md-4 just">
//           <h1 id="setName">Gheorghe Costinel Malaiasi</h1>
//           <h2><a href="https://www.linkedin.com/in/costinel-malaiasi-58510a249">Linkedin</a></h2>
//           <h2><a href="https://github.com/Costinel22">GitHub</a></h2>
//           </Col>
//           <Col size="md-4 just">
//           <img src={myAvatar} alt="My Image avatar" style={{ marginTop: 30, width: 260}} />
//           </Col>
//         </Row>
//       </Container>
//       </Hero>
//     </div>
//   );
// }

// export default About;

function About() {
  return (
    <div>
      <Hero backgroundImage={myHero}>
      <Container  size="md-12 just sm-12">
        <Row>
          <Col size="md-4 just">
          <h2 id="setName" >G Costinel Malaiasi</h2>
          <h4><a href="https://www.linkedin.com/in/costinel-malaiasi-58510a249">Linkedin</a></h4>
          <h4><a href="https://github.com/Costinel22">GitHub</a></h4>
          </Col>
          <Col size="md-4 just">
          <img src={myAvatar} alt="My Image avatar" style={{ marginTop: '10%', width: '50%', maxWidth: 200}} />
          </Col>
        </Row>
      </Container>
      </Hero>
    </div>
  );
}

export default About;
