import React from "react";
import "./style.css";
import Container from "../Container";
import PageViewCounter from "../PageViewCounter";

function Footer() {
  return (
    <footer className="footer">
      <span>Portfolio React 2024</span>
      <Container style={{}}>
        <section>
          <ul>
            <a href="https://www.linkedin.com/in/costinel-malaiasi-58510a249">Linkedin</a>
            <br />
            <a href="https://github.com/Costinel22">GitHub</a>
          </ul>
        </section>
        <section>
          <ul>
            <a href="https://mail.yahoo.com">Email</a>
            <br />
            <a href="tel:+1234567890">Call Uk: +1 234-567-890</a>
          </ul>
        </section>
        <section>
          <PageViewCounter />
        </section>
      </Container>
    </footer>
  );
}

export default Footer;
