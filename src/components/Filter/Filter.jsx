import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

class Filter extends Component {
  state = { filter: '' };

  handleChange = event => {
    this.setState(
      { filter: event.target.value },
      this.props.onchange(this.state.filter)
    );
  };

  render() {
    return (
      <input
        type="text"
        onChange={this.handleChange}
        value={this.state.filter}
      />
    );
  }
}

export default Filter;

Filter.propTypes = {};
