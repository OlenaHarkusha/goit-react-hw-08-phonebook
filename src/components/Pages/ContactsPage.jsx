import { Box, Heading } from '@chakra-ui/react';
import { AddContactForm } from 'components/AddContactForm';
import { FilterContacts } from '../FilterContacts';
import { ContactsList } from 'components/ContactList';

const ContactsPage = () => {
  return (
    <Box p={'20px'}>
      <Heading as={'h1'} color={'purple.900'} textAlign={'center'} mb={'10px'}>
        Phonebook
      </Heading>
      <AddContactForm />
      <Heading as={'h2'} color={'purple.900'} textAlign={'center'} mb={'10px'}>
        Contacts
      </Heading>
      <FilterContacts />
      <ContactsList />
    </Box>
  );
};

export default ContactsPage;
