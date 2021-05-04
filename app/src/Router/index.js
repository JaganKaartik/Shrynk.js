import React, { Suspense } from 'react';
import { DataProvider } from '../context/DataContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Navbar, AuthComponent, PageLoader } from '../components';

const AnalyticsDashboard = React.lazy(() => import('../components/Analytics'));
const Onboarding = React.lazy(() => import('../components/Onboarding'));
const Dashboard = React.lazy(() => import('../components/Dashboard'));

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <div className="container-body">
          <Route exact path="/app/home">
            <Home />
          </Route>

          <Suspense fallback={<PageLoader />}>
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
          </Suspense>
        </div>
      </Switch>
    </BrowserRouter>
  );
}
