// theme.ts (Version 2 needs to be a tsx file, due to usage of StyleFunctions)
import { extendTheme } from '@chakra-ui/react';

// Version 1: Using objects
export const theme = extendTheme({
  styles: {
    global: {
      fonts: {
        body: `'Montserrat', sans-serif`,
      },
      html: { h: '100%' },
      body: {
        m: '0',
        p: '20px',
        color: 'gray.700',
        bg: 'gray.50',
        minH: '100%',
      },
    },
  },
});
