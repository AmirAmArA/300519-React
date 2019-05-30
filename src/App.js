import React, { Component } from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import { Container, Row, Col } from "react-bootstrap";

import ContactForm from "./ContactForm";
export default class App extends Component {
  render() {
    return (
      <>
        <Container>
          <br />
          <Row>
            <Col />
            <Col>
              <ContactForm />
            </Col>
            <Col />
          </Row>
        </Container>
      </>
    );
  }
}

render(<App />, document.querySelector("#container"));
