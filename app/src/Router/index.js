import React from 'react';
import { DataProvider } from '../context/DataContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Onboarding from '../components/Onboarding';
import Dashboard from '../components/Dashboard';
import Navbar from '../components/Navbar';
import AuthComponent from '../components/Auth/AuthComponent';
import AnalyticsDashboard from '../components/Analytics';

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <div className="container-body">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dashboard">
            <AuthComponent>
              <DataProvider>
                <Dashboard />
              </DataProvider>
            </AuthComponent>
          </Route>
          <Route exact path="/onboarding">
            <AuthComponent>
              <Onboarding />
            </AuthComponent>
          </Route>
          <Route exact path="/analytics">
            <AuthComponent>
              <DataProvider>
                <AnalyticsDashboard />
              </DataProvider>
            </AuthComponent>
          </Route>
        </div>
      </Switch>
    </BrowserRouter>
  );
}
