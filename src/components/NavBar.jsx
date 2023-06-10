import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <Box display={'flex'} p={'20px'}>
      <Breadcrumb
        fontWeight="medium"
        separator=""
        display={'flex'}
        justifyContent={''}
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
            to={'login'}
            _activeLink={{ color: 'purple' }}
          >
            Log In
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink
            as={NavLink}
            to={'register'}
            _activeLink={{ color: 'purple' }}
          >
            Register
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );
};
