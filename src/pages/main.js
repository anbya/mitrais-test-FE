import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "../App.css";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

class mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerState:true,
      value: 'true',
      dateToshow: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],
      yearToshow: ["1980","1981","1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"],
      mobilNumbertooltipmsg:'',
      emailTooltipmsg:'',
      mobileNumber:'',
      firstName:'',
      lastName:'',
      month:'',
      date:'',
      year:'',
      gender:'',
      email:''
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
        value: '',
    });
    const dataTosend = {
        phoneNumber: this.state.mobileNumber,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        monthOfbirth: this.state.month,
        dateOfbirth: this.state.date,
        yearOfbirth: this.state.year,
        gender: this.state.gender,
        email: this.state.email
    };
    axios.post(`https://anbyaapi.jaygeegroupapp.com/register`, dataTosend, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
    .then(result => {
        console.log(result.data.status);
        if (result.data.status === "NOTINDONESIAN") {
            this.setState({
                value: 'true',
                mobilNumbertooltipmsg:result.data.messages,
                emailTooltipmsg:''
            });
            this.props.dispatch({ type: "MOBILENUMBERERROR" });
            this.props.dispatch({ type: "EMAILFINE" });
        } else if (result.data.status === "ERRORMOBILENUMBER") {
            this.setState({
                value: 'true',
                mobilNumbertooltipmsg:result.data.messages,
            });
            this.props.dispatch({ type: "MOBILENUMBERERROR" });
            this.props.dispatch({ type: "EMAILFINE" });
        } else if (result.data.status === "ERROREMAIL") {
            this.setState({
                value: 'true',
                mobilNumbertooltipmsg:'',
                emailTooltipmsg:result.data.messages,
            });
            this.props.dispatch({ type: "MOBILENUMBERFINE" });
            this.props.dispatch({ type: "EMAILERROR" });
        } else {
            this.setState({
                footerState:false,
                value: '',
                mobileNumber: '',
                firstName: '',
                lastName: '',
                month: '',
                date: '',
                year: '',
                gender: '',
                email: '',
            });
            this.props.dispatch({ type: "MOBILENUMBERFINE" });
            this.props.dispatch({ type: "EMAILFINE" });
            alert(result.data.status);
        }
    })
    .catch(error => {
      console.log(error);
      console.log(this.props);
    });
  };
  handleChange = event =>  {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }
  render() {
    return (
      <Container fluid={true}>
        <Row
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col xs="10" sm="8" md="6" style={{ backgroundColor: "#fafafa" }}>
            <Row>
              <Col style={{ padding: "2em" }}>
                <h2>Registration</h2>
                <Form onSubmit={this.handleSubmit}>
                  <fieldset disabled={!this.state.value}>
                    <FormGroup>
                      <div className="Tooltip">
                      <Input
                        className="Tooltip"
                        type="text"
                        name="mobileNumber"
                        id="mobileNumber"
                        placeholder="Mobile number"
                        required
                        value={this.state.mobileNumber}
                        onChange={this.handleChange}
                      />
                      <span className="Tooltiptext" style={{visibility:this.props.toolTipmobilenumber}}>{this.state.mobilNumbertooltipmsg}</span>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="First name"
                        required
                        value={this.state.firstName}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Last name"
                        required
                        value={this.state.lastName}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">Date of Birth</Label>
                      <Row>
                        <Col xs="3">
                          <Input type="select" name="month" id="month" value={this.state.month} onChange={this.handleChange}>
                            <option disabled selected value="">
                              Month
                            </option>
                            <option value="Jan">Jan</option>
                            <option value="Feb">Feb</option>
                            <option value="Mar">Mar</option>
                            <option value="Apr">Apr</option>
                            <option value="May">May</option>
                            <option value="Jun">Jun</option>
                            <option value="Jul">Jul</option>
                            <option value="Aug">Aug</option>
                            <option value="Sep">Sep</option>
                            <option value="Oct">Oct</option>
                            <option value="Nov">Nov</option>
                            <option value="Dec">Dec</option>
                          </Input>
                        </Col>
                        <Col xs="2">
                          <Input type="select" name="date" id="date" value={this.state.date} onChange={this.handleChange}>
                            <option disabled selected value="">
                              Date
                            </option>
                            {this.state.dateToshow.length > 0 &&
                              this.state.dateToshow.map((date, index) => (
                                <option key={index} value={date}>{date}</option>
                              ))}
                          </Input>
                        </Col>
                        <Col xs="2">
                          <Input type="select" name="year" id="year" value={this.state.year} onChange={this.handleChange}>
                            <option disabled selected value="">Year</option>
                            {this.state.yearToshow.length > 0 &&
                              this.state.yearToshow.map((year, index) => (
                                <option key={index} value={year}>{year}</option>
                              ))}
                          </Input>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup check inline={true}>
                      <Label check>
                        <Input type="radio" name="gender" checked={this.state.gender === "Male" ? true : false} value="Male" onChange={this.handleChange} /> Male
                      </Label>
                    </FormGroup>
                    <FormGroup check inline={true}>
                      <Label check>
                        <Input type="radio" name="gender" checked={this.state.gender === "Female" ? true : false} value="Female" onChange={this.handleChange} /> Female
                      </Label>
                    </FormGroup>
                    <FormGroup style={{ marginTop: "1em" }}>
                      <div className="Tooltip">
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="with a placeholder"
                        required
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                      <span className="Tooltiptext" style={{visibility:this.props.toolTipemail}}>{this.state.emailTooltipmsg}</span>
                      </div>
                    </FormGroup>
                    <Button
                      block
                      type="submit"
                      style={{ backgroundColor: "#9c27b0" }}
                    >
                      Register
                    </Button>
                  </fieldset>
                </Form>
              </Col>
            </Row>
            <Row style={{display:this.state.footerState === true ? "none" : "flex"}}>
              <Col
                style={{
                  height: "10vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#fafafa",
                  padding:"2em"
                }}
              >
                <Button
                    block
                    type="submit"
                    style={{ backgroundColor: "#9c27b0" }}
                    onClick={() =>
                      this.props.history.push({ pathname: "/login" })
                    }
                >
                    Login
                </Button>
              </Col>
            </Row>
            <Row style={{display:this.state.footerState === true ? "flex" : "none"}}>
              <Col
                style={{
                  height: "10vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#9c27b0",
                }}
              >
                <h2 style={{ color: "#ffffff" }}>Footer</h2>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    testredux: state.reducer.testredux,
    formState: state.reducer.formState,
    toolTipmobilenumber: state.reducer.toolTipmobilenumber,
    toolTipemail: state.reducer.toolTipemail
  };
};

export default withRouter(connect(mapStateToProps)(mainpage));
