import React from 'react';
import { IContactsItem } from '../../types/appTypes';
import { Item, Phone, Button } from './ContactsListItem.styled';

export const ContactListItem:React.FC<IContactsItem> = ({ name, number, onClick })=> {
  return (
    <Item>
      <p>
        {name}:<Phone>{number}</Phone>
      </p>
      <Button type="button" onClick={onClick}>
        Delete
      </Button>
    </Item>
  );
}
