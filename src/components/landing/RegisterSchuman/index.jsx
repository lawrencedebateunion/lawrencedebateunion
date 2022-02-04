import React, { Component, useContext } from 'react';
import { navigate } from "gatsby";
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, Details, RegisterButton, Input, Wrapper1, Label, Textarea, SubLabel} from './styles';
import { Row, Col } from "react-grid-system";

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

class RegisterComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      year: "",
      dietary: "",
      partner: "",
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
          <br/><br/><br/>
          <Wrapper1>
          <Label>Registration: Schuman Challenge</Label>
          <SubLabel>Feb 28th-Mar 1st | Virtual | <a href="/404">Info Sheet</a></SubLabel>
          <Row>
            <Col sm={2}/>
            <Col sm={4}>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.name}
                required
                onChange={event =>
                  this.setState(
                    updateByPropertyName("name", event.target.value)
                  )
                }
              />
            </Col>
            <Col sm={4}>
              <Input
                type="text"
                name="email"
                placeholder="Email"
                value={this.state.email}
                required
                onChange={event =>
                  this.setState(
                    updateByPropertyName("email", event.target.value)
                  )
                }
              />
            </Col>
            <Col sm={2}/>
          </Row>
          <br/>
          <Row>
            <Col sm={2}/>
            <Col sm={4}>
              <Input
                type="text"
                name="dietary"
                placeholder="Dietary Choices/Allergies"
                value={this.state.dietary}
                required
                onChange={event =>
                  this.setState(
                    updateByPropertyName("dietary", event.target.value)
                  )
                }
              />
            </Col>
            <Col sm={4}>
              <Input
                type="text"
                name="year"
                placeholder="Class Year"
                value={this.state.year}
                onChange={event =>
                  this.setState(
                    updateByPropertyName("year", event.target.value)
                  )
                }
              />
            </Col>
            <Col sm={2}/>
          </Row>
          <br/>
          <Row>
            <Col sm={12}>
              <Textarea
                name="message"
                type="text"
                placeholder="Why are you interested in the Schuman Challenge?"
                value={this.state.message}
                required
                onChange={event =>
                  this.setState(updateByPropertyName("message", event.target.value))
                }
              />
            </Col>
          </Row>
          <br />
          <br/>
            <RegisterButton type="submit">Submit</RegisterButton>
            </Wrapper1>
            <br/><br/>
        </form>
    );
  }
}

export const RegisterSchuman = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Wrapper as={Container}>
      <Details theme={theme}>
      <RegisterComponent/>
      </Details>
      </Wrapper>
    </div>
  );
};
