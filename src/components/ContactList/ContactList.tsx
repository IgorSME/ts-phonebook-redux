import React from 'react';
import { IContacts } from '../../types/appTypes';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { Contacts } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { delContact, getContacts, getFilter } from '../../Redux/contactsSlice';

export const ContactList:React.FC =()=> {
  const dispatch = useDispatch();
  const contacts:IContacts = useSelector(getContacts);
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

