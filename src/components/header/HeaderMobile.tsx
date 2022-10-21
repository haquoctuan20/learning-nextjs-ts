import { Box, Button, Drawer, Stack, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import TableRowsIcon from '@mui/icons-material/TableRows';
import { RouteHeader } from './route';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import CloseIcon from '@mui/icons-material/Close';

function HeaderMobile() {
  const [openDraw, setOpenDraw] = useState(false);

  const router = useRouter();

  const toggleDrawer = () => {
    const value = !openDraw;
    setOpenDraw(value);
  };
  return (
    <Box
      component='header'
      textAlign='center'
      display={{
        xs: 'block',
        md: 'none',
        boxShadow: `rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px`,
      }}
    >
      <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={1} p={1}>
        <Link href='/'>
          <Typography component='h3' variant='h3'>
            Logo
          </Typography>
        </Link>

        <Button onClick={toggleDrawer}>
          <TableRowsIcon color='primary' />
        </Button>
      </Stack>

      <Drawer anchor='left' open={openDraw} onClose={toggleDrawer}>
        <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={1} p={1}>
          <Link href='/'>
            <Typography component='h3' variant='h3'>
              Logo
            </Typography>
          </Link>

          <Button onClick={toggleDrawer}>
            <CloseIcon color='primary' />
          </Button>
        </Stack>

        <Box width='300px' px={2} onClick={toggleDrawer} onKeyDown={toggleDrawer}>
          <Stack direction='column' justifyContent='flex-start' alignItems='flex-start' mt={2}>
            {RouteHeader.map((link, index) => (
              <Link key={index} href={link.path} passHref>
                <MuiLink
                  sx={{ fontSize: '20px', height: '40px', width: '100%', display: 'inline-block' }}
                  className={clsx({ active: link.path === router.pathname })}
                >
                  {link.label}
                </MuiLink>
              </Link>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
}

export default HeaderMobile;
