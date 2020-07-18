import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";

class Contact extends Component {
  render() {
    return (
      <div>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-3">
              <div></div>
            </Col>
            <Col size="md-6">
              <div>
                <h3 style={{ color: "lime" }}>Email:</h3>
                <a
                  style={{ color: "blueviolet" }}
                  href="https://accounts.google.com/signin"
                  target="_blank"
                >
                  hmsalmans@gmail.com
                </a>
                <h3 style={{ color: "lime" }}>Dial:</h3>
                <p style={{ color: "blueviolet" }}>+ 01 571 594 0021</p>
                <h3 style={{ color: "lime" }}>Connect:</h3>
                <a
                  href="https://www.linkedin.com/in/hafiz-muhammad-salman-saleem?challengeId=AQGZdil0AJIIAgAAAXNjV_lCJFr6k1HgeKN1m_S0jg2m5WLAqPdh_cAkE0d4yGX9Ia7nzEPB0Xxxm0ZAwGislVbtzHkRTUtBKg&submissionId=4daf4a0b-9dee-2216-1dc7-b7fbdeaf6343"
                  target="_blank"
                >
                  linkedin
                </a><br></br>
                <a href="https://github.com/hmsalmans" target="_blank">Github</a>
             
              </div>
            </Col>
            <Col size="md-3">
              <div></div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
