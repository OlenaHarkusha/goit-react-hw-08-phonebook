import {
  Box,
  Button,
  FormLabel,
  Input,
  chakra,
  useToast,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { postContact } from 'redux/ContactsSlice/Operations';
import { selectContacts } from 'redux/Selectors';
import * as Yup from 'yup';

export const AddContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const toast = useToast();

  const formik = useFormik({
    initialValues: { name: '', number: '' },
    onSubmit: values => {
      const { name, number } = values;
      const normalizedName = name.toLowerCase();

      if (isInContacts(normalizedName)) {
        toast({
          title: `${name} is already in your contact list`,
          position: 'top',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
        return;
      }

      if (name.trim() === '' || number.trim() === ' ') {
        toast({
          title: `the field must not be empty`,
          position: 'top',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
        return;
      }

      dispatch(postContact({ name, number }));

      formik.resetForm();
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(4, 'Must be 4 characters or more')
        .required('Required'),
      number: Yup.string()
        .min(6, 'Must be 6 characters or more')
        .required('Required'),
    }),
  });

  const isInContacts = name => {
    return contacts.some(item => item.name.toLowerCase().includes(name));
  };

  return (
    <Box p={'10px'} display={'flex'} justifyContent={'center'}>
      <chakra.form onSubmit={formik.handleSubmit} w={'80%'}>
        <FormLabel mb={'10px'}>
          Name
          <Input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            mt={'10px'}
            bg={'white'}
          />
        </FormLabel>
        <FormLabel mb={'10px'}>
          Number
          <Input
            type="tel"
            name="number"
            onChange={formik.handleChange}
            value={formik.values.number}
            mt={'10px'}
            bg={'white'}
          />
        </FormLabel>
        <Button type="submit" mt={'10px'} colorScheme="purple">
          Add Contact
        </Button>
      </chakra.form>
    </Box>
  );
};
