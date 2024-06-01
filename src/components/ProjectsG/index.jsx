
// import Container from "../Container";
import "./style.css";
import React, { useEffect, useState } from 'react';
import dataS from "../../../data.json";
// import Row from "../Row";
// import Col from "../Col";
import { Container, Row, Col } from 'react-bootstrap';



function Projects() {
  const [data, setData] = useState([]);

  // Store data to localStorage
  useEffect(() => {
    localStorage.setItem('dataS', JSON.stringify(dataS));
  }, []);

  // Retrieve data from localStorage
  useEffect(() => {
    const retrievedData = localStorage.getItem('dataS');
    const parsedData = JSON.parse(retrievedData);
    setData(parsedData);
  }, []);

  return (
      <Container  style={{ margin: 20, padding: 2 }}>
        <Row style={{ justifyContent: "space-between" }}>
          {data.map((item, index) => (
            <Col md={3} style={{ margin: 20 }} key={index}>
              <div className="bigBox">
                <h2 style={{ color: "black", margin: 5 }}>{item.name}</h2>
                <div>
                  <img src={item.image} alt={item.name} style={{ width: 340, color: "black", margin: 6 }} />
                </div>
                <div style={{ width: 340 }}>
                  <p style={{ color: "black", margin: 6 }}>{item.description}</p>
                </div>
                <ul>
                  <li>
                    <a href={item.URL} style={{ margin: 5 }}>Project Link</a>
                  </li>
                  <li>
                    <a href={item.gitHubURL} style={{ margin: 5 }}>GitHub Link</a>
                  </li>
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
  );
}

export default Projects;