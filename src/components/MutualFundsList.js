import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useHistory } from 'react-router';

import '../styles/mutualFundsList.scss';

import { fetchMutualFundsListStartAction } from '../redux/mutualFund/mutualFundActions';
import { selectMutualFundList } from '../redux/mutualFund/mutualFundSelectors';



const MutualFundsList = ({ fetchMutualFundsStartDispatch, mutualFundList }) => {

  const  history  = useHistory();

  React.useEffect(() => {
    fetchMutualFundsStartDispatch();
  }, []);

  console.log('list: ', mutualFundList);

  return (
    <div className="mf-list-container">
      {mutualFundList && 
        <form className='mf-list-scrolldown'>
          <label htmlFor="mutual-fund" className='mf-list-label'>Choose a mutualfund:</label>
          <select id="mutual-fund" name="mutual-fund">
          { mutualFundList.map(({ schemeCode, schemeName }) => 
          <option 
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
  mutualFundList: selectMutualFundList
});

const mapDispatchToProps = dispatch => ({
  fetchMutualFundsStartDispatch: () => dispatch(fetchMutualFundsListStartAction())
});


export default connect(mapStateToProps, mapDispatchToProps)(MutualFundsList);
