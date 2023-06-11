import { useFormik } from 'formik';
import { Box, Button, FormLabel, Input, chakra } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/AuthSlice/Operations';
import * as Yup from 'yup';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { email: '', name: '', password: '' },
    onSubmit: values => {
      const { name, email, password } = values;
      dispatch(register({ name, email, password }));
      formik.resetForm();
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .min(6, 'Must be 6 characters or more')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      name: Yup.string()
        .min(4, 'Must be 4 characters or more')
        .required('Required'),
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
          />
        </FormLabel>
        <FormLabel mb={'10px'}>
          Name
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
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
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
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
          Register
        </Button>
      </chakra.form>
    </Box>
  );
};

export default RegisterPage;
