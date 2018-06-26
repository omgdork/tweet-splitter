import uuid from 'uuid-v4';
import { delay } from 'redux-saga';
import { put, takeEvery, call } from 'redux-saga/effects';
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
} from './constants';

/**
 * Gets the tweets.
 */
export function* getTweets() {
  try {
    yield put(setTweetsGetting(true));

    // TODO: Make a service call.
    const tweets = [
      {
        id: uuid(),
        text: 'Hello, World!',
        date: new Date(),
      },
      {
        id: uuid(),
        text: 'Hello again.',
        date: new Date(),
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

export default [
  getTweetsSaga,
  sendTweetSaga,
];
