import { Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/FilterSlice/FilterSlice';
import { selectFilter } from 'redux/Selectors';

export const FilterContacts = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <Input
      placeholder="Find contacts by name"
      type="text"
      name="filter"
      value={filter}
      onChange={onChange}
      bg={'white'}
      mb={'20px'}
    />
  );
};
