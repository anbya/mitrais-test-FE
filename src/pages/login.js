import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "../App.css";
import pict from '../assets/underconstruction.png';
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

class loginpage extends Component {
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
                <h2>Login</h2>
              </Col>
            </Row>
            <Row>
              <Col style={{ padding: "2em" }}>
                <img width="100%" src={pict} alt="login" />
              </Col>
            </Row>
            <Row>
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
                    style={{ backgroundColor: "#9c27b0" }}
                    onClick={() =>
                      this.props.history.push({ pathname: "/" })
                    }
                >
                    Back to registration page
                </Button>
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

export default withRouter(connect(mapStateToProps)(loginpage));
