// theme.ts (Version 2 needs to be a tsx file, due to usage of StyleFunctions)
import { extendTheme } from '@chakra-ui/react';

// Version 1: Using objects
export const theme = extendTheme({
  styles: {
    global: {
      fonts: {
        body: `'Montserrat', sans-serif`,
      },
      body: {
        m: '0',
        p: '20px',
        color: 'gray.700',
        bg: 'gray.50',
      },

      // bgImage: url(
      //   "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1980' height='1060' preserveAspectRatio='none' viewBox='0 0 1980 1060'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1980' height='1060' x='0' y='0' fill='rgba(38%2c 38%2c 54%2c 1)'%3e%3c/rect%3e%3cpath d='M1016.77-197.15C763.81-105.53 707.43 642 353.2 650.08-1.03 658.16-123.13 310.77-310.37 300.28' stroke='rgba(129%2c 135%2c 158%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1734.26-35.39C1500.26 29.94 1438.36 670.2 1080.25 683.41 722.14 696.62 753.24 550.91 426.23 550.91 99.23 550.91-60.96 682.75-227.78 683.41' stroke='rgba(129%2c 135%2c 158%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1398.51-185.6C1189.28-85.89 1282.13 585.98 888.57 588.63 495.01 591.28 142.72 193.04-131.32 185.83' stroke='rgba(129%2c 135%2c 158%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M752.99-173.9C575.58 30.51 718.55 822.54 411.68 853.53 104.81 884.52-80.59 523.51-270.93 514.33' stroke='rgba(129%2c 135%2c 158%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1483.25-28.01C1323.95-17.96 1207.32 280.3 924.48 280.84 641.63 281.38 645.09 148.34 365.7 148.34 86.32 148.34-49.51 279.94-193.07 280.84' stroke='rgba(129%2c 135%2c 158%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1980' height='1060' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e"
      // ),
    },
  },
});
