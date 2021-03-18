import React from "react";
import Home from "./components/Home/Home";
// import { Switch, Route } from "react-router-dom";
import Footer from "./components/Commons/Footer";

const App = () => (
  <div class="flex flex-col h-screen">
    <Home />
    <Footer />
  </div>
);

export default App;
