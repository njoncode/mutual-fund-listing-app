import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

import { store } from './redux/store';

import Header from './components/Header';
import MutualFundsListing from './components/MutualFundsListing';
import MutualFundDetails from './components/MutualFundDetails';
import SignInAndSignUp from './components/SignInAndSignUp';

const App = () => {

  return (
    <div className="app">
      <Provider store={store}>
        <Header />
        <Router>
          <Route exact path='/' component={MutualFundsListing}/>
          <Route path='/mf/:schemeCode' component={MutualFundDetails}/>
          <Route path='/sign-in' component={SignInAndSignUp} />
        </Router>
      </Provider>
    </div>
  );
};

export default App;
