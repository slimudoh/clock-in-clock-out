import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import "../assets/css/reset.css";
import "../assets/css/app.scss";

import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Supervisors from "../pages/Supervisors";
import Request from "../pages/Request";
import Messages from "../pages/Messages";
import Location from "../pages/Location";
import ViewUser from "../pages/ViewUser";
import ViewRequest from "../pages/ViewRequest";
import Signin from "../pages/Signin";

function App(props) {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div>
      <div className="app__mobile">
        <div>LOGO</div>
        <p>
          You can't use this app on a mobile or tablet. Please try viewing it on
          a laptop or desktop.
        </p>
      </div>
      <div className="app__desktop">
        <Router>
          <Switch>
            <Route exact path="/" component={Signin} />
            {isAuth ? (
              <Route exact path="/dashboard" component={Dashboard} />
            ) : null}
            {isAuth ? <Route exact path="/users" component={Users} /> : null}
            {isAuth ? (
              <Route exact path="/supervisors" component={Supervisors} />
            ) : null}
            {isAuth ? (
              <Route exact path="/request" component={Request} />
            ) : null}
            {isAuth ? (
              <Route exact path="/messages" component={Messages} />
            ) : null}
            {isAuth ? (
              <Route exact path="/location" component={Location} />
            ) : null}
            {isAuth ? (
              <Route exact path="/view-user" component={ViewUser} />
            ) : null}
            {isAuth ? (
              <Route exact path="/view-request" component={ViewRequest} />
            ) : null}
            {isAuth ? <Route component={Dashboard} /> : null}
            {!isAuth ? <Route render={() => <Redirect to="/" />} /> : null}
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
