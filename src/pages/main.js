import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import logo from '../logo.svg';
import '../App.css';

class mainpage extends Component {
    render() {
        return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React {this.props.testredux}
                </a>
              </header>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        testredux: state.reducer.testredux
    };
};
export default withRouter(connect(mapStateToProps)(mainpage));