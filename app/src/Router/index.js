import React from 'react';
import { UserProvider } from '../context/UserContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Onboarding from '../components/Onboarding';
import Dashboard from '../components/Dashboard';
import Navbar from '../components/Navbar';
import AuthComponent from '../components/Auth/AuthComponent';

export default function Router() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <div className="container-body">
            <Route path="/" exact component={Home} />
            <Route exact path="/dashboard">
              <AuthComponent>
                <Dashboard />
              </AuthComponent>
            </Route>
            <Route exact path="/onboarding">
              <AuthComponent>
                <Onboarding />
              </AuthComponent>
            </Route>
          </div>
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}
