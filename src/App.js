import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

import { store } from './redux/store';

import MutualFundsListing from './components/MutualFundsListing';
import MutualFundDetails from './components/MutualFundDetails';

const App = () => {

  return (
    <div className="app">
      <Provider store={store}>
        <Router>
          <Route exact path='/' component={MutualFundsListing}/>
          <Route path='/mf/:schemeCode' component={MutualFundDetails}/>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
