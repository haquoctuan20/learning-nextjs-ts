import { Box, Container, Stack, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { RouteHeader } from './route';
import clsx from 'clsx';

function HeaderDesktop() {
  const router = useRouter();

  return (
    <Box
      component='header'
      textAlign='center'
      display={{
        xs: 'none',
        md: 'block',
        boxShadow: `rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px`,
      }}
      py={2}
    >
      <Container>
        <Stack direction='row' justifyContent='flex-end' alignItems='center' spacing={3}>
          {RouteHeader.map((link, index) => (
            <Link key={index} href={link.path} passHref>
              <MuiLink
                sx={{ fontSize: '20px' }}
                className={clsx({ active: link.path === router.pathname })}
              >
                {link.label}
              </MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default HeaderDesktop;
