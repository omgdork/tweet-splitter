import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TweetForm from './components/tweet-form';
import Tweets from './components/tweets';
import {
  getTweets,
  sendTweet,
  setTweetSending,
  setErrorMessage,
} from './actions';
import { TWEET_SEND_ERROR } from './constants';
import splitMessage from '../../../utilities/split-message';
import MainLayout from '../../layouts/main-layout';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: '',
    };
  }

  componentWillMount() {
    this.props.getTweets();
  }

  typeMessage = (e) => {
    this.setState(e);
  };

  sendMessage = () => {
    this.props.setTweetSending(true);

    try {
      const { tweet } = this.state;
      const arrMessage = splitMessage(tweet);

      this.props.sendTweet(arrMessage);
    } catch (e) {
      this.props.setErrorMessage(TWEET_SEND_ERROR, e);
      this.props.setTweetSending(false);
    }
  };

  render() {
    return (
      <MainLayout>
        <TweetForm
          onInputChange={this.typeMessage}
          onSubmit={this.sendMessage}
          isSubmitDisabled={!this.state.tweet.length}
          error={this.props.home.data.errors.sendTweet}
        />
        <Tweets tweets={this.props.home.data.tweets} />
      </MainLayout>
    );
  }
}

Home.propTypes = {
  data: PropTypes.shape({
    tweets: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
    })).isRequired,
  }),
  ui: PropTypes.shape({
    isGettingTweets: PropTypes.bool.isRequired,
    isSendingTweet: PropTypes.bool.isRequired,
  }),
};

function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTweets: bindActionCreators(getTweets, dispatch),
    sendTweet: bindActionCreators(sendTweet, dispatch),
    setTweetSending: bindActionCreators(setTweetSending, dispatch),
    setErrorMessage: bindActionCreators(setErrorMessage, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
