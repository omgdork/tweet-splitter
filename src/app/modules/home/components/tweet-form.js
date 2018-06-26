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
      <form>
        <textarea
          name="tweet"
          onChange={this.onInputChange}
          >
        </textarea>
        <button
          type="button"
          onClick={this.props.onSubmit}
          disabled={this.props.isSubmitDisabled}
        >
          Tweet
        </button>
      </form>
    );
  }
}

TweetForm.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isSubmitDisabled: PropTypes.bool.isRequired,
};

export default TweetForm;
