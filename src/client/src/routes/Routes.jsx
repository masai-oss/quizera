import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardRoutes from "./DashboardRoutes";
import Login from "./Login";
import LoginTeacher from "./LoginTeacher";
import Register from "./Register";
import RegisterAdmin from "./RegisterAdmin";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import NavBarPublic from "./NavbarPublic";
import NoMatch from "./NoMatch";
import LeaderBoard from "./LeaderBoard";

const Routes = () => {
  return (
    <>
      <Route path="/" component={NavBarPublic} />
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/dash" render={() => <DashboardRoutes />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/loginTeacher" render={() => <LoginTeacher />} />
        <Route path="/register" render={() => <Register />} />
        <Route path="/registeradmin" render={() => <RegisterAdmin />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/contact" render={() => <Contact />} />
        <Route path="/leaderboard" render={() => <LeaderBoard />} />
        <Route component={NoMatch} />
      </Switch>
    </>
  );
};

export default Routes;
