import React from 'react';
// import PropTypes from 'prop-types';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { Contacts } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { delContact, getContacts, getFilter } from 'Redux/contactsSlice';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const value = useSelector(getFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = value.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();

  return (
    <Contacts>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onClick={() => dispatch(delContact(id))}
          />
        );
      })}
    </Contacts>
  );
}
// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
