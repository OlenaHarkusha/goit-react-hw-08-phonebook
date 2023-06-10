import { Box, Button, FormLabel, Input, chakra } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/ContactsSlice/Operations';

export const EditContactsForm = ({ initName, initNumber, id, onClose }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { name: initName, number: initNumber },
    onSubmit: values => {
      const { name, number } = values;
      const contact = { name, number };
      dispatch(editContact({ contact, id }));
      formik.resetForm();
    },
  });

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
        <Button
          type="submit"
          mt={'10px'}
          colorScheme="purple"
          onClick={onClose}
        >
          Edit Contact
        </Button>
      </chakra.form>
    </Box>
  );
};
