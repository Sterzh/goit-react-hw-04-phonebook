import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

class Filter extends Component {
  state = {
    filter: '',
    filterContact: '',
  };

  handleChange = event => {
    this.setState({ filter: event.target.value });

    setTimeout(() => {
      const filterUpdateContacts = this.props.contacts.filter(contact => {
        return contact.name
          .toLowerCase()
          .includes(this.state.filter.toLowerCase());
      });
      this.setState({ filterContact: filterUpdateContacts });
      setTimeout(() => {
        this.props.onchange(this.state.filterContact);
      }, 1);
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

export default Filter;

Filter.propTypes = {
  contacts: PropTypes.array.isRequired,
  onchange: PropTypes.func.isRequired,
};
