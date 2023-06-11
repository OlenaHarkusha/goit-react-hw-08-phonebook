import { Box } from '@chakra-ui/react';

import { Navigation } from 'components/Navigation';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Box
      maxW={[300, 500, 700]}
      minH={'100vh'}
      m={'0 auto'}
      bg={'gray.100'}
      borderRadius={'20px'}
      boxShadow={'base'}
    >
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </Box>
  );
};
