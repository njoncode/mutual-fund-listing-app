import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useHistory, useRouteMatch } from 'react-router';

import '../styles/mutualFundDetailsOverview.scss';

import { selectMutualFundList } from '../redux/mutualFund/mutualFundSelectors';
import CustomButton from './CustomButton';

const MutualFundDetailsOverview = ({ mutualFundList }) => {

    const  history  = useHistory();
    let match = useRouteMatch();

  return (
      <>
    { mutualFundList && 
        <div className='mf-overview-container'>
          <p className='mf-heading'>Mutual Funds</p>
          <div className='mf-overview-content-container'>
            {mutualFundList.splice(0,5).map(({ schemeCode, schemeName }) => 
            <div 
              className='mf-overview-content'
              onClick={() => history.push(`${match.path}mf/${schemeCode}`)}
            >
              <div className='mf-overview-details'>
                <p><span>Scheme Name: </span>{schemeName}</p>
                <p><span>Scheme Code: </span>{schemeCode}</p>
              </div>
              <CustomButton btnKnowMore>Click to know more</CustomButton>
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
