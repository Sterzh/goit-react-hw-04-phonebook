import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = { id: '', name: '', number: '' };

  handleChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
    // this.setState({ id: `id-${this.props.contacts.length + 1}` });
    this.setState({ id: nanoid() });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
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
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="">
          Number{' '}
          <input
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
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

ContactForm.propTypes = {};
