import React, { useEffect } from "react";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Commons/Footer";
import Onboarding from "./components/Onboarding";
import Dashboard from "./components/Dashboard";
import AuthComponent from "./components/Auth/AuthComponent";
import { UserProvider } from "./context/UserContext";

export default function App() {
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
  });
  return (
    <div>
      <UserProvider>
        <BrowserRouter>
          {/* <div class="body-wrapper"> */}
          <Switch>
            <div class="body-wrapper">
              <Route path="/" exact component={Home} />
              <Route exact path="/dashboard">
                {/* <AuthComponent> */}
                <Dashboard />
                {/* </AuthComponent> */}
              </Route>
              <Route exact path="/onboarding">
                <AuthComponent>
                  <Onboarding />
                </AuthComponent>
              </Route>
              <Footer />
            </div>
          </Switch>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}
