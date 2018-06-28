import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TweetForm extends PureComponent {
  state = {
    tweet: '',
  };

  onInputChange = (e) => {
    const field = {};
    const { name, value } = e.target;
  
    field[name] = value;
    this.setState(field, () => {
      this.props.onInputChange(field);
    });
  };

  clearTweet() {
    this.setState({
      tweet: '',
    });
  }

  render() {
    return (
      <div className="tweet-box">
        <img className="avatar" src="" alt="" />
        <form>
          <textarea
            name="tweet"
            onChange={this.onInputChange}
            >
          </textarea>
          <div className="tweet-box-toolbar">
            {this.props.error && <p className="error">{this.props.error}</p>}
            {this.state.tweet.length + 10 >= this.props.characterLimit && <p className="warning">{this.props.characterLimit - this.state.tweet.length}</p>}
            <button
              type="button"
              onClick={this.props.onSubmit}
              disabled={!this.state.tweet.length}
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    );
  }
}

TweetForm.defaultProps = {
  characterLimit: 50,
};

TweetForm.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  characterLimit: PropTypes.number.isRequired,
};

export default TweetForm;
