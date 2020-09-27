import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CupholderPage from '../components/CupholderPage';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import PlacePage from '../components/PlacePage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/cupholder" component={CupholderPage} />
        <Route path="/place/:id" component={PlacePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
