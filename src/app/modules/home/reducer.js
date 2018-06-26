import {
  TWEETS_GET,
  TWEETS_GET_SUCCESS,
  TWEETS_GET_ERROR,
  TWEET_SEND,
  TWEET_SEND_SUCCESS,
  TWEET_SEND_ERROR,
} from './constants';

export const initialState = {
  data: {
    tweets: [],
  },
  ui: {
    isGettingTweets: false,
    isSendingTweet: false,
  },
};

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case TWEETS_GET:
      return {
        ...state,
        ui: {
          ...state.ui,
          isGettingTweets: true,
        },
      };
    case TWEETS_GET_SUCCESS: {
      return {
        ...state,
        data: {
          tweets: [...action.payload.tweets],
        },
        ui: {
          ...state.ui,
          isGettingTweets: false,
        }
      }
    }
    case TWEETS_GET_ERROR: {
      return {
        ...state,
        ui: {
          ...state.ui,
          isGettingTweets: false,
        },
      };
    }
    case TWEET_SEND:
      return {
        ...state,
        ui: {
          ...state.ui,
          isSendingTweet: true,
        },
      };
    case TWEET_SEND_SUCCESS:
      return {
        ...state,
        data: {
          tweets: [...state.data.tweets, action.payload.tweet],
        },
        ui: {
          ...state.ui,
          isSendingTweet: false,
        },
      };
    case TWEET_SEND_ERROR:
      return {
        ...state,
        ui: {
          ...state.ui,
          isSendingTweet: false,
        },
      };
    default:
      return state;
  }
}
