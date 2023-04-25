import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = { id: '', name: '', number: '' };

  handleChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value.trim(),
    });
    this.setState({ id: nanoid() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.name !== '') {
      const checkName = this.props.contacts.find(contact => {
        return contact.name === this.state.name;
      });

      checkName === undefined
        ? this.props.onSubmit(this.state)
        : alert([this.state.name] + ': is already in contacts');
    }

    this.reset();
  };

  reset = () => {
    this.setState({ id: '', name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.contactForm}>
        <label htmlFor="">
          Name{' '}
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="">
          Number{' '}
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button className={css.contactFormButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
