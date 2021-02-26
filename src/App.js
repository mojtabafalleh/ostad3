import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./views/login";
import SignUp from "./views/signup";
import Forgot from "./views/forgot";
import Reset from "./views/reset";
import Landing from "./views/landing";
import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";

import AdminLayout from "./layouts/Admin";
import AuthLayout from "./layouts/Auth";

function App() {
  return (<Router>
    <div className="App">
     

          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/forgot" component={Forgot} />
            <Route path="/reset" component={Reset} />

            <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
          </Switch>
    
    </div></Router>
  );
}

export default App;