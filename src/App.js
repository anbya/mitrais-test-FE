import React from 'react';
import logo from './logo.svg';
import './App.css';
// import "./assets/font-awesome/css/font-awesome.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mainpage from "./pages/main";



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Mainpage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
