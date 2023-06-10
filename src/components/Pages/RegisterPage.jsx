import { useFormik } from 'formik';
import { Box, Button, FormLabel, Input, chakra } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/AuthSlice/Operations';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { email: '', name: '', password: '' },
    onSubmit: values => {
      const { name, email, password } = values;
      dispatch(register({ name, email, password }));
      formik.resetForm();
    },
  });

  return (
    <Box p={'10px'} display={'flex'} justifyContent={'center'}>
      <chakra.form onSubmit={formik.handleSubmit} w={'50%'}>
        <FormLabel mb={'10px'}>
          Email
          <Input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            mt={'10px'}
            bg={'white'}
          />
        </FormLabel>
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
          Password
          <Input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            mt={'10px'}
            bg={'white'}
          />
        </FormLabel>
        <Button type="submit" mt={'10px'} colorScheme="purple">
          Register
        </Button>
      </chakra.form>
    </Box>
  );
};

export default RegisterPage;
