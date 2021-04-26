import React from 'react';
import { DataProvider } from '../context/DataContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  Home,
  Onboarding,
  Dashboard,
  Navbar,
  AuthComponent,
  AnalyticsDashboard,
} from '../components';

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <div className="container-body">
          <Route exact path="/app/home">
            <Home />
          </Route>
          <Route exact path="/app/onboarding">
            <AuthComponent>
              <Onboarding />
            </AuthComponent>
          </Route>
          <DataProvider>
            <Route exact path="/app/dashboard">
              <AuthComponent>
                <Dashboard />
              </AuthComponent>
            </Route>
            <Route exact path="/app/analytics">
              <AuthComponent>
                <AnalyticsDashboard />
              </AuthComponent>
            </Route>
          </DataProvider>
        </div>
      </Switch>
    </BrowserRouter>
  );
}
