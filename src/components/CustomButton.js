
import React from 'react';
import PropTypes from 'prop-types';

import '../styles/customButton.scss';

const CustomButton = ({ children, btnKnowMore }) => (
  <button
    type="submit"
    className={`${
        btnKnowMore ? 'btn-know-more custom-button' : 'custom-button'
    }`}
  >
    {children}
  </button>
);
export default CustomButton;

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  btnTransferEth: PropTypes.bool.isRequired,
};

// className={`${btn-transfer-eth ? 'btn-transfer-eth' : ''} custom-button`}