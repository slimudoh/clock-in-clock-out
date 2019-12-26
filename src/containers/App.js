import React from "react";

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
import ViewUser from "../pages/ViewUser";
import ViewRequest from "../pages/ViewRequest";
import Signin from "../pages/Signin";

function App() {
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
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/supervisors" component={Supervisors} />
            <Route exact path="/request" component={Request} />
            <Route exact path="/view-user" component={ViewUser} />
            <Route exact path="/view-request" component={ViewRequest} />
            <Route render={() => <Redirect to="/" />} />
            {/* {!props.isAuth ? (
            <Route exact path="/fashion/:hashmail/:code" component={Signup} />
          ) : null}
          {!props.isAuth ? <Route path="/signin" component={Signin} /> : null}
          {!props.isAuth ? (
            <Route path="/change-password" component={Password} />
          ) : null}
          {!props.isAuth ? (
            <Route path="/new-password" component={Reset} />
          ) : null}
          {!props.isAuth ? (
            <Route render={() => <Redirect to="/signin" />} />
          ) : null} */}

            {/* {props.isAuth ? (
            <Route path="/dashboard" component={Dashboard} />
          ) : null}
          {props.isAuth ? <Route path="/payment" component={Payment} /> : null}
          {props.isAuth ? <Route path="/account" component={Account} /> : null}
          {props.isAuth ? <Route component={Notfound} /> : null} */}
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
