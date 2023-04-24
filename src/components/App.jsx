import { Component } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    this.setState(prevState => ({ contacts: [...prevState.contacts, data] }));
  };

  filterHandler = e => {
    this.setState({ filter: e });
  };

  render() {
    console.log(this.state.filter);
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          contacts={this.state.contacts}
          onSubmit={this.formSubmitHandler}
        />
        <h2>Contacts</h2>
        <Filter onchange={this.filterHandler} value={this.state.filter} />
        <ContactList contactsList={this.state.contacts} />
      </>
    );
  }
}
