import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Text,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useAuth } from './Hooks/Hooks';
import { logout } from 'redux/AuthSlice/Operations';

export const AuthNavBar = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      p={'20px'}
      boxShadow={'sm'}
    >
      <Breadcrumb
        fontWeight="medium"
        separator=""
        display={'flex'}
        justifyContent={'space-between'}
      >
        <BreadcrumbItem>
          <BreadcrumbLink
            as={NavLink}
            to={'/'}
            _activeLink={{ color: 'purple' }}
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink
            as={NavLink}
            to={'contacts'}
            _activeLink={{ color: 'purple' }}
          >
            Contacts
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Box display={'flex'} gap={'10px'} alignItems={'center'}>
        <Text color={'black'}>{user.email}</Text>
        <Button
          type="button"
          onClick={() => dispatch(logout())}
          colorScheme="purple"
          size={'sm'}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};
