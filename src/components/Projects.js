import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Weather from "./demo.png";
import Workday from "./workday.png"

class Projects extends Component {
  render() {
    return (
      <div>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h1>Deployed Projects</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
              <h3 class="ads">Weather Dashboard</h3>
              <p class="colors">
                Upon launching current weather as well as next 5 days data is
                received. Data includes: Temperature, Humidity, Wind, UV-Index,
                Weather Icon, and Date.
              </p>

              <a href="https://hmsalmans.github.io/Weather-Dashboard/" target="_blank">
                <img
                  src={Weather}
                  style={{ width: "200px" }}
                  alt="Weather Dashboard"
                />
              </a>
            </Col>
            <Col size="md-6">
            <h3 class="ads">Workday Scheduler</h3>
                    <p class="colors">You can schedule your day tasks as well as find previosuly performed tasks</p>
                     <a
                  href="https://hmsalmans.github.io/homework_5/"
                  target="_blank"
                >
                  <img
                    src={Workday}
                    style={{ width: "200px" }}
                    alt="Workday Scheduler"
                  />
                </a>
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
              <p>
                I am Hafiz Muhammad Salman Saleem, a Full Stake Developer. I am
                profecient in certain technologies including HTML, CSS,
                Bootstrap, Javascript, Jquery and React. I have also mastered
                the skills of Node.js, Express.js, data bases like mySQL and
                Mongodb.
               
              </p>
            </Col>
            <Col size="md-6">
              <p>
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

export default Projects;
