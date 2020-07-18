import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";

class Contact extends Component {
    render () {
        return(
        <div>
            <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-3">
              <div></div>
            </Col>
            <Col size="md-6">
            <div>
            <h3>Email:</h3>
            <a style={{color: "blueviolet"}} href="https://accounts.google.com/signin" target="_blank">hmsalmans@gmail.com</a> 
            <h3>Dial:</h3>
            <p style={{color: "blueviolet"}}>+ 01 571 594 0021</p>
            <h3>Connect:</h3>
            <a  href="www.linkedin.com/in/hafiz-muhammad-salman-saleem" target="_blank">linkedin</a>
            <a href="https://github.com/hmsalmans">Github</a> 
            <a style={{color: "blueviolet"}} href="https://github.com/hmsalmans"> GitHub</a>
            
        </div>
              
            </Col>
            <Col size="md-3">
              <div></div>
            </Col>
          </Row>
        </Container>
        </div>
        )
    }
}

export default Contact;