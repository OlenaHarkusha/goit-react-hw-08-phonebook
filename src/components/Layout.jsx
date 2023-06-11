import { Box, Spinner } from '@chakra-ui/react';

import { Navigation } from 'components/Navigation';
import { Suspense } from 'react';
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
        <Suspense
          fallback={
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="purple.500"
              size="xl"
              m={'0 auto'}
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </Box>
  );
};
