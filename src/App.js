import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/index";
import "./App.css";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

function App(props) {
  return (
    <div className="app">
      <Navbar {...props} />
    </div>
  );
}

export default withRouter(App);
