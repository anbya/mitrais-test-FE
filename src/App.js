import React from 'react';
import './App.css';
// import "./assets/font-awesome/css/font-awesome.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mainpage from "./pages/main";
import Loginpage from "./pages/login";



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Mainpage />
          </Route>
          <Route path="/login">
            <Loginpage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
