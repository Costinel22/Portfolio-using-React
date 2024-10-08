import "./style.css";
import React, { useEffect, useState } from 'react';
import dataS from "../../../data.json";
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
      <Container >
        <Row lg={12} md={12} sm={8} className="project-g">
          {data.map((item, index) => (
            <Col style={{ margin: 10 }} key={index}>
              <div className="bigBox">
                <h2 style={{ color: "black", margin: 5 }}>{item.name}</h2>
                <div>
                  <img src={item.image} alt={item.name} style={{ width: 310, color: "black", margin: 6 }} />
                </div>
                <div style={{ width: 316 }}>
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