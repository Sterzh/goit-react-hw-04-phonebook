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

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

// componentDidMount() {
//   const downloadContacts = JSON.parse(localStorage.getItem('contacts'));
//   if (downloadContacts !== null) {
//     this.setState({ contacts: downloadContacts });
//     setTimeout(() => {}, 1);
//   }
// }

//   formSubmitHandler = data => {
//     this.setState(prevState => ({ contacts: [...prevState.contacts, data] }));
//     setTimeout(() => {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }, 1);
//   };

//   filterHandler = event => {
//     this.setState(() => {
//       return { filter: event };
//     });
//   };

//   deleteContacts = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(e => e.id !== id),
//     }));

//     this.state.filter === ''
//       ? this.setState(prevState => ({
//           contacts: prevState.contacts.filter(e => e.id !== id),
//         }))
//       : this.setState(prevState => ({
//           filter: prevState.filter.filter(e => e.id !== id),
//         }));

//     setTimeout(() => {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }, 1);
//   };

//   render() {
//     return (
//       <>
//         <h1>Phonebook</h1>
//         <ContactForm
//           contacts={this.state.contacts}
//           onSubmit={this.formSubmitHandler}
//         />
//         <h2>Contacts</h2>
//         <Filter contacts={this.state.contacts} onchange={this.filterHandler} />
//         <ContactList
//           contactsList={
//             this.state.filter === '' ? this.state.contacts : this.state.filter
//           }
//           onClick={this.deleteContacts}
//         />
//       </>
//     );
//   }
// }
