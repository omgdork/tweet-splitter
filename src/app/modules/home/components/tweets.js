import React from 'react';
import PropTypes from 'prop-types';
import Tweet from './tweet';

const Tweets = ({ tweets }) => (
  <ul>
    {tweets
      .sort((a, b) => b.date - a.date)
      .map((tweet) => <Tweet key={tweet.id} {...tweet} />)}
  </ul>
);

Tweets.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  })).isRequired,
}

export default Tweets;
