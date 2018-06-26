import {
  TWEETS_GET,
  TWEETS_GETTING,
  TWEETS_GET_SUCCESS,
  TWEETS_GET_ERROR,
  TWEET_SEND,
  TWEET_SENDING,
  TWEET_SEND_SUCCESS,
  TWEET_SEND_ERROR,
} from './constants';

export function getTweets() {
  return {
    type: TWEETS_GET,
  };
}

export function setTweetsGetting(isGetting) {
  return {
    type: TWEETS_GETTING,
    payload: {
      isGetting,
    },
  };
}

export function getTweetsSuccess(tweets) {
  return {
    type: TWEETS_GET_SUCCESS,
    payload: {
      tweets,
    },
  };
}

export function getTweetsError(error) {
  return {
    type: TWEETS_GET_ERROR,
    payload: {
      error,
    },
  };
}

export function sendTweet(tweet) {
  return {
    type: TWEET_SEND,
    payload: {
      tweet,
    },
  };
}

export function setTweetSending(isSending) {
  return {
    type: TWEET_SENDING,
    payload: {
      isSending,
    }
  }
}

export function sendTweetSuccess(tweet) {
  return {
    type: TWEET_SEND_SUCCESS,
    payload: {
      tweet,
    },
  };
}

export function sendTweetError(error) {
  return {
    type: TWEET_SEND_ERROR,
    payload: {
      error,
    },
  };
}
