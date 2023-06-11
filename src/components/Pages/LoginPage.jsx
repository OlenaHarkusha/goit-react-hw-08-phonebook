import {
  Box,
  Button,
  FormLabel,
  Input,
  Text,
  chakra,
  useToast,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/AuthSlice/Operations';
import * as Yup from 'yup';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: values => {
      const { email, password } = values;
      if (email.trim() === '' || password.trim() === '') {
        toast({
          title: 'the field must not be empty',
          position: 'top',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
      dispatch(login({ email, password }));
      formik.resetForm();
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .min(6, 'Must be 6 characters or more')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
  });

  return (
    <Box p={'10px'} display={'flex'} justifyContent={'center'}>
      <chakra.form onSubmit={formik.handleSubmit} w={'50%'}>
        <FormLabel mb={'10px'}>
          Email
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
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
          {formik.touched.password && formik.errors.password ? (
            <Text color={'red'}>{formik.errors.password}</Text>
          ) : null}
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
