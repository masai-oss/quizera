import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardRoutes from "./DashboardRoutes";
import Login from "./Login";
import Register from "./Register";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import NavBarPublic from "./NavbarPublic";
import CreateTest from "./CreateTest";
import AddQuestion from "./AddQuestion";
import NoMatch from "./NoMatch";
import TeacherDashboard from "./TeacherDashboard";
import TeacherProfile from "./TeacherProfile";
import EditTeacherProfile from "./EditTeacherProfile";
import Navbar from "./Dashboard/NavBar";

const Routes = () => {
  return (
    <>
      {/* <Route path="/" component={NavBarPublic} /> */}
      <Route path="/" component={Navbar} />
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/dash" render={() => <DashboardRoutes />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/register" render={() => <Register />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/contact" render={() => <Contact />} />
        <Route path="/createtest" render={() => <CreateTest />} />
        <Route path="/addquestion" render={() => <AddQuestion />} />
        <Route path="/teacherdashboard" render={() => <TeacherDashboard />} />
        <Route path="/teacherprofile" render={() => <TeacherProfile />} />
        <Route
          path="/editteacherprofile"
          render={() => <EditTeacherProfile />}
        />
        <Route component={NoMatch} />
      </Switch>
    </>
  );
};

export default Routes;
