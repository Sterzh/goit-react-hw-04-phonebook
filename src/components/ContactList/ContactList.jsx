import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contactsList, onClick }) => {
  // console.log(this.props);

  return (
    <ul className={css.contactList}>
      {contactsList.map(e => {
        return (
          <li className={css.contactListItem} key={e.id}>
            {e.name}: {e.number}
            <button type="button" onClick={() => onClick(e.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contactsList: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
