import React, { Component } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

export default class ContactForm extends Component {
  render() {
    return (
      <>
        <Form>
          <Form.Group as={Row} controlId="formHorizontalName">
            <Form.Label column sm={4}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="string" placeholder="Name" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPhone">
            <Form.Label column sm={4}>
              Phone
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="String" placeholder="Phone" />
            </Col>
          </Form.Group>
          <fieldset>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={6}>
                How did reach us?
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Advertisment"
                  name="formHorizontalRadios"
                  id="advertismentRadio"
                />
                <Form.Check
                  type="radio"
                  label="News"
                  name="formHorizontalRadios"
                  id="newsRadio"
                />
                <Form.Check
                  type="radio"
                  label="Friends"
                  name="formHorizontalRadios"
                  id="friendsRadio"
                />
                <Form.Check
                  type="radio"
                  label="Social Media"
                  name="formHorizontalRadios"
                  id="socialMediaRadio"
                />
              </Col>
            </Form.Group>
          </fieldset>
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Submit</Button>
            </Col>
          </Form.Group>
        </Form>
      </>
    );
  }
}
