import { List, Spinner } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/ContactsSlice/Operations';
import { selectIsLoading, selectVisibleContatcs } from 'redux/Selectors';

import { ContactItem } from 'components/ContactsItem';

export const ContactsList = () => {
  const visibleContacts = useSelector(selectVisibleContatcs);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return isLoading ? (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="purple.500"
      size="xl"
      m={'0 auto'}
    />
  ) : (
    <List display={'flex'} flexDirection={'column'} gap={'10px'}>
      {visibleContacts.map(item => (
        <ContactItem item={item} key={item.id} />
      ))}
    </List>
  );
};
