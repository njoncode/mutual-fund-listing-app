import React from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import '../styles/mutualfundDetails.scss';

import { fetchMutualFundsDetailsStartAction } from '../redux/mutualFund/mutualFundActions';
import { selectMutualFundDetails } from '../redux/mutualFund/mutualFundSelectors';


const MutualFundDetails = ({ fetchMutualFundsDetailsStartDispatch, mutualFundDetails }) => {


  const { schemeCode } = useParams();

  React.useEffect(() => {

    fetchMutualFundsDetailsStartDispatch(schemeCode);

    }, []);

  console.log('mutualFundDetails: ', mutualFundDetails);


  const { fund_house, scheme_category, scheme_code, scheme_name, scheme_type } = mutualFundDetails || {};

  return (
    <div className="mf-details-container">
      { mutualFundDetails && 
        <div className='mf-details'>
          <p><span>Scheme Name: </span>{scheme_name}</p>
          <p><span>Scheme Type: </span>{scheme_type}</p>
          <p><span>Scheme Code: </span>{scheme_code}</p>
          <p><span>Scheme Category: </span>{scheme_category}</p>
          <p><span>Fund House: </span>{fund_house}</p>
      </div>
      }
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  mutualFundDetails: selectMutualFundDetails
});

const mapDispatchToProps = dispatch => ({
  fetchMutualFundsDetailsStartDispatch: (data) => dispatch(fetchMutualFundsDetailsStartAction(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(MutualFundDetails);
