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
            >
          </textarea>
          <div className="tweet-box-toolbar">
            {this.props.error && <p className="error">{this.props.error}</p>}
            <button
              type="button"
              onClick={this.props.onSubmit}
              disabled={this.props.isSubmitDisabled}
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    );
  }
}

TweetForm.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isSubmitDisabled: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

export default TweetForm;
