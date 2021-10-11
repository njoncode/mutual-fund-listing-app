import React from 'react';
// import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Router, Route, Switch }  from 'react-router-dom';


import Header from './components/Header';
import MutualFundsListing from './components/MutualFundsListing';
import MutualFundDetails from './components/MutualFundDetails';
import SignInAndSignUp from './components/SignInAndSignUp';
import EditProfile from './components/EditProfile';

import history from './utils/history';

const App = () => {

  return (
    <div className="app">
        <Header />
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={MutualFundsListing}/>
            <Route path='/mf/:schemeCode' component={MutualFundDetails}/>
            <Route path='/sign-in' component={SignInAndSignUp} />
            <Route path='/edit-profile' component={EditProfile} />
          </Switch>
        </Router>
    </div>
  );
};

export default App;
