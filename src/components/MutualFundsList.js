import React from 'react';

import { fetchMfList } from '../utils/api';


const MutualFundsList = ({ history }) => {

  const [list, setList] = React.useState(null);

  React.useEffect(() => {
    fetchMfList()
      .then(res => {
        console.log('res: ', res);
        setList(res.data)
      })
      .catch(err => console.error(err))
  }, []);

  return (
    <div className="mf-list-container">
      <p>Mutual Funds</p>
      {list && 
        <form >
          <label htmlFor="mutual-fund">Choose a mutualfund:</label>
          <select id="mutual-fund" name="mutual-fund">
          {list.map(({ schemeCode, schemeName }) => 
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

export default MutualFundsList;
