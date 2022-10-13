import { Box } from '@mui/material';
import Link from 'next/link';
import React from 'react';

function HeaderMobile() {
  return (
    <Box component='header' textAlign='center' display={{ xs: 'block', md: 'none' }}>
      <h1>Header mobile</h1>

      <Link href='/'>
        <a>Home</a>
      </Link>

      <Link href='/blog'>
        <a>Blog</a>
      </Link>

      <Link href='/works'>
        <a>Works</a>
      </Link>
    </Box>
  );
}

export default HeaderMobile;
