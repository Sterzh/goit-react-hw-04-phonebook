import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contactsList }) => {
  return (
    <>
      {contactsList.map(e => {
        return (
          <li key={e.id}>
            {e.name}: {e.number}
          </li>
        );
      })}
    </>
  );
};

export default ContactList;

ContactList.propTypes = {};
