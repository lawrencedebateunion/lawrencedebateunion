import React, { Component } from 'react';
import { navigate } from "gatsby";
import { Link } from "gatsby";
import { Wrapper1, RegisterButton, Input, Label, Textarea} from './register_styles';
import { Row, Col } from "react-grid-system";

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

{/*   gender: "",  
      year (class)
*/}

class Join extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      time: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(this.state);
    const data = new FormData(event.target);
    fetch(
      "https://script.google.com/macros/s/AKfycbwCGKbLGuOmpprMWHlJCLQoH0hmAaxtyzMmZVC43QHjxOIkuH8rpxd5ZR4WpAevRaaLjA/exec",
      { method: "POST", body: data }
    )
      .then(response => console.log("success!", response))
      .catch(error => console.error("error!", error.message));
    event.preventDefault();
    navigate("/404");
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <br/>
          <Wrapper1>
          <Row>
            <Col>
              <Input
                type="text"
                name="name"
                placeholder="Name*"
                value={this.state.name}
                required
                onChange={event =>
                  this.setState(
                    updateByPropertyName("name", event.target.value)
                  )
                }
              />
            </Col>
            <Col>
              <Input
                type="text"
                name="email"
                placeholder="Email*"
                value={this.state.email}
                required
                onChange={event =>
                  this.setState(
                    updateByPropertyName("email", event.target.value)
                  )
                }
              />
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <Textarea
                name="message"
                type="text"
                placeholder="Message*"
                value={this.state.message}
                required
                onChange={event =>
                  this.setState(updateByPropertyName("message", event.target.value))
                }
              />
            </Col>
          </Row>
          <br/>
            <RegisterButton type="submit">Submit</RegisterButton>
            </Wrapper1>
            <br/><br/>
        </form>
    );
  }
}

export default Join;
