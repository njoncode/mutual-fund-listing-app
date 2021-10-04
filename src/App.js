import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MutualFundsList from './components/MutualFundsList';
import MutualFundDetails from './components/MutualFundDetails';

const App = () => {

  return (
    <div className="app">
      <Router>
        <Route exact path='/' component={MutualFundsList}/>
        <Route path='/mf/:schemeCode' component={MutualFundDetails}/>
      </Router>
    </div>
  );
};

export default App;
