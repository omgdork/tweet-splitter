import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const formatTimestamp = (timestamp) => {
  const now = moment(new Date());
  const tweetTimestamp = moment(timestamp);

  return now.diff(tweetTimestamp, 'hours') < 24
    ? tweetTimestamp.fromNow()
    : now.diff(tweetTimestamp, 'months') < 12
      ? tweetTimestamp.format('MMM D')
      : tweetTimestamp.format('MMM D YYYY');
};

const Tweet = ({ id, text, date }) => (
  <li>
    <img className="avatar" src="" alt="" />
    <div className="tweet-content">
      <p className="tweet-details">
        <a
          className="handle"
          href="/">
          <span className="full-name">Your Name</span>
          @YourUsername
        </a>
        <a
          className="timestamp"
          href={`/status/${id}`}>
          {formatTimestamp(date)}
        </a>
      </p>
      <p>{text}</p>
    </div>
  </li>
);

Tweet.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};

export default Tweet;
