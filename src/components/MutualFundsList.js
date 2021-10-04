import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchMfList } from '../utils/api';

import { fetchMutualFundsListStartAction } from '../redux/mutualFund/mutualFundActions';
import { selectMutualFundList } from '../redux/mutualFund/mutualFundSelectors';

import MutualFundsListing from './MutualFundsListing';


const MutualFundsList = ({ history, fetchMutualFundsStartDispatch, mutualFundList}) => {

  // const [list, setList] = React.useState(null);

  // const [searchQuery, setSearchQuery] = React.useState('');

  // const [searchList, setSearchList] = React.useState(null);


  // const handleChange = (e) => {
  //   setSearchQuery(e.target.value)
  //   const searchedMatches = list.filter(({ schemeName }) => schemeName.toLowerCase().includes(searchQuery.toLowerCase()))
  //   setSearchList(searchedMatches);
  // }

  React.useEffect(() => {
    fetchMutualFundsStartDispatch();
  }, []);

  console.log('list: ', mutualFundList);

  return (
    <div className="mf-list-container">
      {/* <MutualFundsListing> */}
      <p>Mutual Funds</p>
      {mutualFundList && 
        <form >
          <label htmlFor="mutual-fund">Choose a mutualfund:</label>
          <select id="mutual-fund" name="mutual-fund">
      { mutualFundList && mutualFundList.map(({ schemeCode, schemeName }) => 
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

    {/* <div className="search-input-container">
      <input type='search' name='search' value={searchQuery}  placeholder='Type the mutual fund name'onChange={handleChange} />
      {searchQuery && 
        <form >
          <label htmlFor="mutual-fund">Choose a mutualfund:</label>
          <select id="mutual-fund" name="mutual-fund">
          { searchList.map(({ schemeCode, schemeName }) => 
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
    </div>  */}

    

      {/* <div className="search-input-container">
        <input type='search' name='search' value={searchQuery} onChange={handleChange} />
        {searchQuery && searchList.map(({ schemeName }) => 
          <p>{schemeName}</p>
          )}
      </div> */}
      
    </div>
  );

  // return (
  //   <div className="mf-list-container">
  //     <p>Mutual Funds</p>
  //     {list && 
  //       <form >
  //         <label htmlFor="mutual-fund">Choose a mutualfund:</label>
  //         <select id="mutual-fund" name="mutual-fund">
  //         {list.map(({ schemeCode, schemeName }) => 
  //           <option 
  //             value={schemeName}
  //             onClick={() => history.push(`/mf/${schemeCode}`)}
  //           >
  //               {schemeName}
  //           </option>
  //         )}
  //         </select>
  //     </form>
  //    }

  //     <div className="search-input-container">
  //       <input type='search' name='search' value={searchQuery} onChange={handleChange} />
  //       {searchQuery && searchList.map(({ schemeName }) => 
  //         <p>{schemeName}</p>
  //         )}
  //     </div>

  //   </div>
  // );
};

const mapStateToProps = createStructuredSelector({
  mutualFundList: selectMutualFundList
});

const mapDispatchToProps = dispatch => ({
  fetchMutualFundsStartDispatch: () => dispatch(fetchMutualFundsListStartAction())
});


export default connect(mapStateToProps, mapDispatchToProps)(MutualFundsList);
