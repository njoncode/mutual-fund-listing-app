import React from 'react';
import { useParams } from 'react-router';

import '../styles/mutualfundDetails.scss';

import { fetchMfDetails } from '../utils/api';


const SearchInput = ({ searchList }) => {

  const [searchQuery, setSearchQuery] = React.useState(null);
  const [searchList, setSearchList] = React.useState(null);

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
    const searchedMatches = list.filter(({ schemeName }) => schemeName.toLowerCase().includes(searchQuery.toLowerCase()))
    setSearchList(searchedMatches);
  }
  
  return (
     <div className="search-input-container">
        <input type='search' name='search' value={searchQuery} onChange={handleChange} />
        {searchQuery && searchList.map(({ schemeName }) => 
          <p>{schemeName}</p>
          )}
      </div>
  );
};

export default SearchInput;
