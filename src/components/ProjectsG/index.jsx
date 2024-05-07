
import Container from "../Container";
import "./style.css";
import React, { useEffect, useState } from 'react';
import dataS from "../../../data.json";
import Row from "../Row";



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
    <section className="bigBox" >
    <Row col-md-6 >
      <Container style={{}}>
        <div >
        {data.map((item, index) => (
          <Row key={index}>
            <h2 style={{ color: "black" }}>{item.name}</h2>
            <div>
              <img src={item.image} alt={item.name} style={{ width: 340, color: "black" }} />
            </div>
            <div style={{width: 360 }}>
              <p>{item.description}</p>
            </div>
            <ul>
              <li>
                <a href={item.URL}>Project Link</a>
              </li>
              <li>
                <a href={item.gitHubURL}>GitHub Link</a>
              </li>
            </ul>
            <br />
            <br />
            <br />
            <br />
          </Row>
        ))}
        </div>
      </Container>
     </Row>
     <br />
    </section>
  );
}

export default Projects;