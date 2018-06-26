import React from 'react';
import PropTypes from 'prop-types';

const Tweet = ({ text }) => (
  <li >
    {text}
  </li>
);

Tweet.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tweet;
