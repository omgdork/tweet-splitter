/**
 * Gets the tweets from the session storage.
 */
export function getTweets() {
  if (!sessionStorage.getItem('tweets')) {
    sessionStorage.setItem('tweets', JSON.stringify([]));
  }

  return JSON.parse(sessionStorage.getItem('tweets')).map((tweet) => {
    return {
      ...tweet,
      date: new Date(tweet.date),
    };
  });
}

/**
 * Sends the tweet to the session storage.
 * @param {object} tweet - The tweet object.
 * @param {string} tweet.id - The tweet id.
 * @param {string} tweet.text - The tweet.
 * @param {Date} tweet.date - The tweet timestamp.
 * @returns {object} The tweet.
 */
export function sendTweet(tweet) {
  const tweets = JSON.parse(sessionStorage.getItem('tweets'));

  tweets.push(tweet);
  sessionStorage.setItem('tweets', JSON.stringify(tweets));

  return tweet;
}
