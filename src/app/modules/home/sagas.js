import uuid from 'uuid-v4';
import { put, takeEvery } from 'redux-saga/effects';
import {
  setTweetsGetting,
  getTweetsSuccess,
  getTweetsError,
  setTweetSending,
  sendTweetSuccess,
  sendTweetError,
} from './actions';
import {
  TWEETS_GET,
  TWEET_SEND,
  TWEET_SET_ERROR_MESSAGE,
  TWEET_SEND_ERROR,
  TWEETS_GET_ERROR,
} from './constants';

/**
 * Gets the tweets.
 */
export function* getTweets() {
  try {
    yield put(setTweetsGetting(true));

    // TODO: Make a service call.
    const now = new Date();
    const tweets = [
      {
        id: uuid(),
        text: 'Hello, World!',
        date: new Date(now.getTime() + 10),
      },
      {
        id: uuid(),
        text: 'Hello again.',
        date: new Date(now.getTime() + 20),
      },
    ];

    yield put(getTweetsSuccess(tweets));
  } catch (e) {
    yield put(getTweetsError(e));
  } finally {
    yield put(setTweetsGetting(false));
  }
}

/**
 * Saga for getting tweets.
 */
export function* getTweetsSaga() {
  yield takeEvery(TWEETS_GET, getTweets);
}

/**
 * Sends the tweet. (In parts if it exceeds the character limit.)
 * @param {[string]} tweet - An array of tweet parts.
 */
export function* sendTweet({ payload: { tweet }}) {
  try {
    yield put(setTweetSending(true));

    // TODO: Make a service call.
    const now = new Date();
    const parts = tweet.map((part, i) => ({
      id: uuid(),
      text: part,
      date: new Date(now.getTime() + i * 10),
    }));

    yield parts.map((part) => put(sendTweetSuccess(part)));
  } catch (e) {
    yield put(sendTweetError(e));
  } finally {
    yield put(setTweetSending(false));
  }
}

/**
 * Saga for sending a tweet.
 */
export function* sendTweetSaga() {
  yield takeEvery(TWEET_SEND, sendTweet);
}

/**
 * Sets the error message.
 * @param {string} errorType - The error type.
 * @param {string} errorMessage - The error message.
 */
export function* setErrorMessage({ payload: { errorType, errorMessage } }) {
  switch (errorType) {
    case TWEETS_GET_ERROR:
      yield put(getTweetsError(errorMessage));
      break;
    case TWEET_SEND_ERROR:
      yield put(sendTweetError(errorMessage));
      break;
    default:
  }
}

/**
 * Saga for setting the error message.
 */
export function* setErrorMessageSaga() {
  yield takeEvery(TWEET_SET_ERROR_MESSAGE, setErrorMessage);
}

export default [
  getTweetsSaga,
  sendTweetSaga,
  setErrorMessageSaga,
];
