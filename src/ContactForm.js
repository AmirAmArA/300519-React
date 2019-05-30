import React, { Component } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import validator, { field } from "./validator";
export default class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: field({ value: "", name: "name", minLength: 2 }),
      phone: field({ value: "", name: "phone", pattern: /^\d{3}-\d{7}$/ }),
      reason: field({ value: "", name: "reason" })
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onInputChange({ target: { name, value } }) {
    this.setState({
      [name]: {
        ...this.state[name],
        value,
        ...validator(value, name, this.state[name].validations)
      }
    });
  }
  onSubmit(e) {
    console.log(this.state);
    e.preventDefault();
    for(let key in this.state){
      this.setState({
        [key]: {
          ...this.state[key],
          ...validator(this.state[key].value, this.state[key].name, this.state[key].validations)
        }
      })
    }
    
  }
  render() {
    return (
      <>
        <Form onSubmit={this.onSubmit}>
          <Form.Group as={Row} controlId="formHorizontalName">
            <Form.Label column sm={7}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                name="name"
                placeholder="name"
                defaultValue={this.state.name.value}
                onBlur={this.onInputChange}
              />
            </Col>
          </Form.Group>
            {this.state.name.errors.map((err, i) => (
              <Form.Text key={i} className="text-danger">
                {err}
              </Form.Text>
            ))}

          <Form.Group as={Row} controlId="formHorizontalPhone">
            <Form.Label column sm={7}>
              Phone
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                name="phone"
                placeholder="phone"
                defaultValue={this.state.phone.value}
                onBlur={this.onInputChange}
              />
            </Col>
          </Form.Group>
            {this.state.phone.errors.map((err, i) => (
              <Form.Text key={i} className="text-danger">
                {err}
                
              </Form.Text>
            ))}
          <Form.Group as={Row} controlId="formControlReachedUs">
            <Form.Label column sm={7}>How did you reach us?</Form.Label>
              <Col  sm={10}>
            <Form.Control
              as="select"
              name="reason"
              defaultValue={this.state.reason.value}
              onBlur={this.onInputChange}
            >
              <option value="">Select how</option>
              <option value="advertisment">Advertisment</option>
              <option value="news">News</option>
              <option value="friends">Friends</option>
              <option value="socialMedia">Social Media</option>
            </Form.Control>
            </Col>
          </Form.Group>
          {this.state.reason.errors.map((err, i) => (
            <Form.Text key={i} className="text-danger">
              {err}
            </Form.Text>
          ))}
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
