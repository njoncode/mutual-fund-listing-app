import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

import { store } from './redux/store';

import MutualFundsList from './components/MutualFundsList';
import MutualFundDetails from './components/MutualFundDetails';

const App = () => {

  return (
    <div className="app">
      <Provider store={store}>
        <Router>
          <Route exact path='/' component={MutualFundsList}/>
          <Route path='/mf/:schemeCode' component={MutualFundDetails}/>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
