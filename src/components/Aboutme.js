import React, { Component } from "react";
import Container from "./Container";
import Hero from "./Hero";
import Row from "./Row";
import Col from "./Col";

class AboutMe extends Component {
  render() {
    return (
      <div>
        <Hero backgroundImage="http://www.getmdl.io/assets/demos/transparent.jpg">
          <h1>Hafiz Muhammad Salman Saleem</h1>
          <h2>Full Stack Developer</h2>
          <h4 style={{ color: "yellow" }}>
            HTML, CSS, Javascript, Node Js, MySql, Mongodb, React
          </h4>
        </Hero>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h1>Know About me </h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <p>
                I am Hafiz Muhammad Salman Saleem, a Full Stake Developer. I am
                profecient in certain technologies including HTML, CSS,
                Bootstrap, Javascript, Jquery and React. I have also mastered
                the skills of Node.js, Express.js, data bases like mySQL and
                Mongodb.
              </p>
              <p>
                {" "}
                Graduate in Master in Agriculture, the love of coding fell upon
                me a little late and I am fortunate to make the change. I
                graduated a full stack developer boot camp program from George
                Washington University in Arlington Va. USA. I want to explore
                this sea of information and am committed to learn new
                technologies regularly to augment my knowledge of coding and
                enhance my abilities to grow with this continuously changing
                field.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AboutMe;
