import React from 'react';
import {  Route, Switch } from 'react-router-dom'

import Header from './components/Header';
import MutualFundsListing from './components/MutualFundsListing';
import MutualFundDetails from './components/MutualFundDetails';
import SignInAndSignUp from './components/SignInAndSignUp';

const App = () => {

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path='/' component={MutualFundsListing}/>
        <Route path='/mf/:schemeCode' component={MutualFundDetails}/>
        <Route path='/sign-in' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
};

export default App;
