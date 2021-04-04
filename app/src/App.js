import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Commons/Footer";
import Onboarding from "./components/Onboarding";
import Dashboard from "./components/Dashboard";
import AuthComponent from "./components/Auth/AuthComponent";
import { UserProvider } from "./context/UserContext";

export default function App() {
  return (
    <div>
      <UserProvider>
        <BrowserRouter>
          <div class="main-wrapper">
            <Switch>
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
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}
