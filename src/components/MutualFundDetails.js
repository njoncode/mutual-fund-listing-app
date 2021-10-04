import React from 'react';
import { useParams } from 'react-router';

import { fetchMfDetails } from '../utils/api';


const MutualFundDetails = () => {

  const [details, setDetails] = React.useState(null);

  const { schemeCode } = useParams();

  React.useEffect(() => {
      fetchMfDetails(schemeCode)
        .then(res => {
          setDetails(res.data)
        })
        .catch(err => console.error(err))
    }, [])

  return (
    <div className="mf-details-container">
      {details && <p>{details.meta.fund_house}</p>}
    </div>
  );
};

export default MutualFundDetails;
