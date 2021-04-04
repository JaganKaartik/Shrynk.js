import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/commons/Footer";
import Onboarding from "./components/Onboarding";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  const [isAuthenticated, setAuthentication] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : null;
    const toggleSwitch = document.querySelector(
      '.theme-switch input[type="checkbox"]'
    );
    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
      if (currentTheme === "dark") {
        toggleSwitch.checked = true;
      }
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <div class="flex flex-col h-screen">
          <Switch>
            <Route path="/" exact component={Home} />
            <PrivateRoute
              authstate={this.state.isAuthenticated}
              path="/onboarding"
              exact
              component={Onboarding}
            />
            <PrivateRoute
              authstate={this.state.isAuthenticated}
              path="/dashboard"
              exact
              component={Dashboard}
            />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}
