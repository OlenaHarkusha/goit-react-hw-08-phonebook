import { Box, Heading } from '@chakra-ui/react';
import { useAuth } from 'components/Hooks/Hooks';

const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box p={'20px'}>
      {isLoggedIn ? (
        <Heading as={'h1'} textAlign={'center'} m={'auto'}>
          Wellcome to Phonebook!
        </Heading>
      ) : (
        <Heading as={'h1'} textAlign={'center'} m={'auto'}>
          Wellcome to Phonebook! Please log in or register
        </Heading>
      )}
    </Box>
  );
};

export default HomePage;
