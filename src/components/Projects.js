import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Weather from "./demo.png";
import Workday from "./workday.png";
import LetsRun from "./background.jpg";

class Projects extends Component {
  render() {
    return (
      <div>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h1 style={{ color: "gray" }}>Deployed Projects</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
              <h3 style={{ color: "lime" }}>Weather Dashboard</h3>
              <p class="colors">
                Upon launching current weather as well as next 5 days data is
                received. Data includes: Temperature, Humidity, Wind, UV-Index,
                Weather Icon, and Date.
              </p>

              <a
                href="https://hmsalmans.github.io/Weather-Dashboard/"
                target="_blank"
              >
                <img
                  src={Weather}
                  style={{ width: "200px" }}
                  alt="Weather Dashboard"
                />
              </a>
            </Col>
            <Col size="md-6">
              <h3 style={{ color: "lime" }}>Workday Scheduler</h3>
              <p class="colors">
                You can schedule your day tasks as well as find previosuly
                performed tasks
              </p>
              <a href="https://hmsalmans.github.io/homework_5/" target="_blank">
                <img
                  src={Workday}
                  style={{ width: "200px" }}
                  alt="Workday Scheduler"
                />
              </a>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <Row>
            <Col size="md-12">
              <h3 style={{ color: "lime" }}>Let's Run App</h3>
              <p>
                One jogging application where you can view your route, local
                weather, and possible music choices all within the same app!
              </p>
              <a
                style={{ marginLeft: "300px" }}
                href="https://johncosper.github.io/Project-1/"
                target="_blank"
              >
                <img
                  src={LetsRun}
                  style={{ width: "500px" }}
                  alt="Workday Scheduler"
                />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Projects;
