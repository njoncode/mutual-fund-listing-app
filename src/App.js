import React from 'react';
// import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Router, Route, Switch }  from 'react-router-dom';

import history from './utils/history';


import Header from './components/Header';
import MutualFundsListing from './components/MutualFundsListing';
import MutualFundDetails from './components/MutualFundDetails';
import SignInAndSignUp from './components/SignInAndSignUp';
import EditProfile from './components/EditProfile';
import ProtectedRoute from './router/ProtectedRoute';
import NotFoundPage from './components/NotFoundPage';

const App = () => {

  return (
    <div className="app">
        <Header />
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={MutualFundsListing}/>
            <Route path='/sign-in' component={SignInAndSignUp} />
            <ProtectedRoute path='/mf/:schemeCode' component={MutualFundDetails} />
            <ProtectedRoute path='/edit-profile' component={EditProfile} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
    </div>
  );
};

export default App;
