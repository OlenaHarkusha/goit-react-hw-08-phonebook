import { Box, Button, FormLabel, Input, chakra } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/AuthSlice/Operations';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: values => {
      const { email, password } = values;
      dispatch(login({ email, password }));
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
            colorScheme="purple"
          />
        </FormLabel>
        <FormLabel>
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
          Log In
        </Button>
      </chakra.form>
    </Box>
  );
};

export default LoginPage;
