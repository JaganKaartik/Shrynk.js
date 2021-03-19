import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Commons/Footer";
import Onboarding from "./components/Onboarding";
import Dashboard from "./components/Dashboard";

const App = () => (
  <BrowserRouter>
    <div class="flex flex-col h-screen">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/onboarding" exact component={Onboarding} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
