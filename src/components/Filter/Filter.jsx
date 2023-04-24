import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

class Filter extends Component {
  state = { filter: '' };

  handleChange = event => {
    this.setState({ filter: event.target.value });
    setTimeout(() => {
      this.props.onchange(this.state.filter);
    }, 1);
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

// function Filter({ value, onChange }) {
//   return <input type="text" value={value} />;
// }

export default Filter;

Filter.propTypes = {};
