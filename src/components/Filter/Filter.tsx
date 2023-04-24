import React from 'react';
// import PropTypes from 'prop-types';
import { Input, Label } from '../../components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, getFilter } from '../../Redux/contactsSlice';
export { Label, Input } from '../ContactForm/ContactForm.styled';

export const Filter:React.FC =()=> {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  const onChangeFilter = (e:React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <div>
      <Label htmlFor="filter">Find contacts by name </Label>
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={onChangeFilter}
      />
    </div>
  );
}

