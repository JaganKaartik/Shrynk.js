import React, { Component } from "react";
// import Navbar from "../Navbar";
import logo from "../../assets/images/bg2.gif";
// import { Router } from "react-router-dom";
export default class Login extends Component {
  render() {
    return (
      <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
        <div>
          {" "}
          <img src={logo} alt="loading..." />
        </div>
      </div>
    );
  }
}
