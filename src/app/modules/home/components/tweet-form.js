import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TweetForm extends PureComponent {
  onInputChange = (e) => {
    const field = {};
    const { name, value } = e.target;
  
    field[name] = value;
    this.props.onInputChange(field);
  };

  render() {
    return (
      <div className="tweet-box">
        <img className="avatar" src="" alt="" />
        <form>
          <textarea
            name="tweet"
            onChange={this.onInputChange}
            value={this.props.tweet}
            >
          </textarea>
          <div className="tweet-box-toolbar">
            {this.props.error && <p className="error">{this.props.error}</p>}
            {this.props.tweet.length + 10 >= this.props.characterLimit && <p className="warning">{this.props.characterLimit - this.props.tweet.length}</p>}
            <button
              type="button"
              onClick={this.props.onSubmit}
              disabled={!this.props.tweet.length}
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
  tweet: '',
};

TweetForm.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  characterLimit: PropTypes.number.isRequired,
  tweet: PropTypes.string.isRequired,
};

export default TweetForm;
