import React, { Component } from 'react';
import { navigate } from "gatsby";
import { Link } from "gatsby";
import { Logo, Wrapper1, RegisterButton, Input, Select, Label, SubLabel, Textarea} from './register_styles';
import { Row, Col } from "react-grid-system";

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

class Join extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      year: "",
      gender: "",
      why: "",
      time: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(this.state);
    const data = new FormData(event.target);
    fetch(
      "https://script.google.com/macros/s/AKfycbyOWWQ2c2otCdwYTTP2axCLTTkBrPES9LSWzko9XCxXSvYlCdCo-o3yqs7tKW3yxGy_eg/exec",
      { method: "POST", body: data }
    )
      .then(response => console.log("success!", response))
      .catch(error => console.error("error!", error.message));
    event.preventDefault();
    navigate("/submitted");
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <br/><br/><br/>
          <Wrapper1>
          <Label>Contact</Label>
          <Row>
            <Col>
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
            <Col>
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
            <Col>
              <Input
                type="text"
                name="gender"
                placeholder="Gender"
                value={this.state.gender}
                required
                onChange={event =>
                  this.setState(
                    updateByPropertyName("gender", event.target.value)
                  )
                }
              />
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <br />
              <Textarea
                name="why"
                type="text"
                placeholder="Message"
                value={this.state.why}
                required
                onChange={event =>
                  this.setState(updateByPropertyName("why", event.target.value))
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

export default Join;
