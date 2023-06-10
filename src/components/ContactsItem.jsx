import {
  Box,
  Button,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { EditContactsForm } from 'components/EditContactForm';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/ContactsSlice/Operations';

export const ContactItem = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  return (
    <ListItem
      key={item.id}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Text>
        {item.name}: {item.number}
      </Text>
      <Box display={'flex'} gap={'10px'}>
        <Button
          type="button"
          onClick={() => dispatch(deleteContact(item.id))}
          colorScheme="purple"
          size={'sm'}
        >
          Delete contact
        </Button>
        <Button type="button" onClick={onOpen} colorScheme="purple" size={'sm'}>
          Edit contact
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <EditContactsForm
                initName={item.name}
                initNumber={item.number}
                id={item.id}
                onClose={onClose}
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </ListItem>
  );
};
