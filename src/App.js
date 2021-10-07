import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { ConnectedRouter } from "connected-react-router";

import { store }  from './redux/store';

import history from './utils/history';

import Header from './components/Header';
import MutualFundsListing from './components/MutualFundsListing';
import MutualFundDetails from './components/MutualFundDetails';
import SignInAndSignUp from './components/SignInAndSignUp';

const App = () => {

  return (
    <div className="app">
      <Provider store={store}>
      <ConnectedRouter history={history}>
        <Header />
          <Router history={history}>
            <Switch>
              <Route exact path='/' component={MutualFundsListing}/>
              <Route path='/mf/:schemeCode' component={MutualFundDetails}/>
              <Route path='/sign-in' component={SignInAndSignUp} />
            </Switch>
          </Router>
          </ConnectedRouter>
          </Provider>
    </div>
  );
};

export default App;
