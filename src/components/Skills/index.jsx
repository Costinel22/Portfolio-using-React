import React from "react";
import "./style.css";
import Container from "../Container";
import { FaBeer } from 'react-icons/fa';


function Skills() {
  return (

    <div className="skills">
      <span>The Skills Bootcamp in Front-End Web Development</span>
      <Container style={{ marginTop: 30 }} size="md-12 just sm-12">
        <div className="row">
          <div className="col">
            <ul>
              <li>
                Programming Languages:<ul> <li>JavaScript</li><li> CSS</li> <li>HTML</li></ul>
              </li>
              <br />
              <li>
                Libraries:<ul><li>Bootstrap</li><li>The DOM</li><li>APIs</li><li>JQuery</li><li>JSON</li><li>AJAX</li><li>Node.js</li><li>ES6</li><li>React <  FaBeer /></li></ul>
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

      <span>The Skills AI and Robotics Bedford University Luton</span>
      <Container style={{ marginTop: 30 }} size="md-12 just sm-12">
        <div className="row">
          <div className="col">
            <ul>
              <li>
                Programming Languages:<ul> <li>Java</li><li>Python</li><li>C++</li> <li>C#</li><li>C+</li></ul>
              </li>
              <br />
              <li>
                Libraries:<ul><li>Ros</li></ul>
              </li>
            </ul>
          </div>

          <div className="col">
            <ul>
              <li>Robot Operating System (ROS)</li>
              <li>Object-Oriented Programming (OOP)</li>
              <li>Rework</li>
              <li>Circuit</li>
              <li>Soldering</li>
              <li>Electronics Repair</li>
              <li>Machine Learning</li>
              <li>Project Management</li>
              <li>Cybersecurity</li>
              <li>Linux</li>
              <li>AutoCAD</li>
              <li>Design</li>
              <li>Robotics</li>
              <li>Agile Methodologies</li>
              <li>Graphical User Interface (GUI)</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>Software as a Service (SaaS)</li>
              <li> Software Development Life Cycle (SDLC)</li>
              <li>Deployment</li>
              <li> Programming Languages</li>
              <li>Operating Systems</li>
              <li>Fault Finding</li>
              <li>Assemblies</li>
              <li>Teamwork</li>
              <li>Mathematics</li>
              <li>Agile Project Management</li>
              <li>Attention to Detail</li>
              <li>Security</li>
              <li>Crimping</li>
              <li>MySQL</li>
              <li>Team Management</li>
              <li>Computer Science</li>
              <li>Electrical Troubleshooting</li>
              </ul>
          </div>
        </div>
      </Container>
    </div>


  );
}

export default Skills;
