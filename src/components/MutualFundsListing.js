import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import '../styles/mutualFundsListing.scss';


import { selectMutualFundDetails, selectMutualFundList } from '../redux/mutualFund/mutualFundSelectors';
import MutualFundsList from './MutualFundsList';
import MutualFundDetailsOverview from './MutualFundDetailsOverview';

const MutualFundsListing = ({ match }) => {

  return (
    <div className="mf-listing-container">
      <MutualFundsList />
      <MutualFundDetailsOverview />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  mutualFundDetails: selectMutualFundDetails,
  mutualFundList: selectMutualFundList
});


export default connect(mapStateToProps)(MutualFundsListing);
