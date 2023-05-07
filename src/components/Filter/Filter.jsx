import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import css from './Filter.module.css';

export default function Filter(props) {
  const [filter, setFilter] = useState('');
  const [filterContact, setFilterContact] = useState('');

  const handleChange = event => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    const filterUpdateContacts = props.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    setFilterContact(filterUpdateContacts);
  }, [filter, props.contacts]);

  useEffect(() => {
    props.onchange(filterContact);
  }, [filterContact, props]);

  return <input type="text" onChange={handleChange} value={filter} />;
}

Filter.propTypes = {
  contacts: PropTypes.array.isRequired,
  onchange: PropTypes.func.isRequired,
};
