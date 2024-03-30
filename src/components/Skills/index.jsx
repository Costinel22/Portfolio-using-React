import React from "react";
import "./style.css";
import Container from "../Container";
import { FaBeer } from 'react-icons/fa';


function Skills() {
  return (

    <div className="skills">
      {/* <span>Portfolio React 2024</span> */}
      <Container style={{ marginTop: 30 }} size="md-12 just sm-12">
        <div className="row">
          <div className="col">
            <ul>
              <li>
                Programming Languages:<ul> <li>JavaScript</li><li> CSS</li> <li>HTML</li></ul>
              </li>
              <br />
              <li>
                Libraries:<ul><li>Bootstrap</li><li>The DOM</li><li>APIs</li><li>JQuery</li><li>JSON</li><li>AJAX</li><li>Node.js</li><li>ES6</li><li>React <FaBeer /></li></ul>
              </li>
            </ul>
          </div>

          <div className="col">
            <ul>
              <li>
                User experience design
              </li>
              <li> How to create a professional project
                Portfolio</li>
              <li>Deployment</li>
              <li>Behavior-driven development
                Test-driven development</li>
              <li>Object-oriented programming</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>

  );
}

export default Skills;
