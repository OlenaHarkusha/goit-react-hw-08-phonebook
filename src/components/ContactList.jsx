import { List } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/ContactsSlice/Operations';
import { selectVisibleContatcs } from 'redux/Selectors';

import { ContactItem } from 'components/ContactsItem';

export const ContactsList = () => {
  const visibleContacts = useSelector(selectVisibleContatcs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List display={'flex'} flexDirection={'column'} gap={'10px'}>
      {visibleContacts.map(item => (
        <ContactItem item={item} key={item.id} />
      ))}
    </List>
  );
};
