import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useHistory } from 'react-router';

import '../styles/mutualFundsList.scss';
import mfImage from '../images/images.jpg';

import { fetchMutualFundsListStartAction } from '../redux/mutualFund/mutualFundActions';
import { selectMutualFundList, selectIsMutualFundDetailsFetching } from '../redux/mutualFund/mutualFundSelectors';
import Spinner from './Spinner';

const MutualFundsList = ({ fetchMutualFundsStartDispatch, mutualFundList, isMutualFundDetailsFetching }) => {

  const  history  = useHistory();

  React.useEffect(() => {
    fetchMutualFundsStartDispatch();
  }, []);

  return (
    <div className="mf-list-container">
      <img className='mf-image' src={mfImage} alt='mutual-fund-img'/>
      {isMutualFundDetailsFetching && <Spinner />}
      {
        !isMutualFundDetailsFetching && mutualFundList && 
        <form className='mf-list-scrolldown'>
          <label htmlFor="mutual-fund" className='mf-list-label'>Choose a mutualfund:</label>
          <select id="mutual-fund" name="mutual-fund">
          { mutualFundList.map(({schemeCode, schemeName }, index) => 
          <option 
            key={`${index}{schemeCode}`}
            value={schemeName}
            onClick={() => history.push(`/mf/${schemeCode}`)}
          >
              {schemeName}
          </option>
        )}
          </select>
      </form>
     }
     </div>
  );
};

const mapStateToProps = createStructuredSelector({
  mutualFundList: selectMutualFundList,
  isMutualFundDetailsFetching: selectIsMutualFundDetailsFetching
});

const mapDispatchToProps = dispatch => ({
  fetchMutualFundsStartDispatch: () => dispatch(fetchMutualFundsListStartAction())
});


export default connect(mapStateToProps, mapDispatchToProps)(MutualFundsList);
