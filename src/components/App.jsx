import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  const formSubmitHandler = data => {
    setContacts(prevContacts => [...prevContacts, data]);
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filterHandler = event => {
    setFilter(event);
  };

  const deleteContacts = id => {
    setContacts(prevContacts => prevContacts.filter(e => e.id !== id));
    filter === ''
      ? setContacts(prevContacts => prevContacts.filter(e => e.id !== id))
      : setFilter(prevFilter => prevFilter.filter(e => e.id !== id));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter contacts={contacts} onchange={filterHandler} />
      <ContactList
        contactsList={filter === '' ? contacts : filter}
        onClick={deleteContacts}
      />
    </>
  );
}
