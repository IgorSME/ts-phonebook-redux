import React from 'react';
import PropTypes from 'prop-types';
import { Item, Phone, Button } from './ContactsListItem.styled';

export function ContactListItem({ name, number, onClick }) {
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
ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
