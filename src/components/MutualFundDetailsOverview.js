import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useHistory, useRouteMatch } from 'react-router';

import '../styles/mutualfundDetails.scss';

import { selectMutualFundList } from '../redux/mutualFund/mutualFundSelectors';


const MutualFundDetailsOverview = ({ mutualFundList }) => {

    const  history  = useHistory();
    let match = useRouteMatch();

  return (
      <>
    { mutualFundList && 
        <div className='mf-overview-container'>
          <p className='mf-heading'>Mutual Funds</p>
          <div className='mf-overview-details'>
            {mutualFundList.splice(0,5).map(({ schemeCode, schemeName }) => 
              <div 
                className='mf-overview-items'
                onClick={() => history.push(`${match.path}mf/${schemeCode}`)}
              >
                <p><span>Scheme Name: </span>{schemeName}</p>
                <p><span>Scheme Code: </span>{schemeCode}</p>
              </div>
            )}
          </div>
        </div>
        }
    </>
  );
};

const mapStateToProps = createStructuredSelector({
    mutualFundList: selectMutualFundList
  });

export default connect(mapStateToProps)(MutualFundDetailsOverview);
