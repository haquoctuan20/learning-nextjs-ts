import React from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';

import imgTemp from '@src/assets/img/image.jpg';

const Hero = () => {
  return (
    <Box component='section' pt={{ xs: 2, md: 8 }}>
      <Container fixed>
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          justifyContent='space-between'
          alignItems='center'
          spacing={4}
        >
          <Box textAlign={{ xs: 'center', md: 'left' }}>
            <Typography component='h1' variant='h4' fontWeight='bold' mb={5}>
              Lorem ipsum dolor <br /> consectetur adipisicing elit
            </Typography>

            <Typography mb={5}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi minima
              cumque commodi! Id laborum vel placeat rem eveniet possimus corporis quasi pariatur
              nostrum officia. Veritatis voluptates accusantium perferendis doloribus tempora,
              voluptas in rem earum laborum veniam aliquid pariatur quis rerum sed deserunt qui sint
            </Typography>

            <Button variant='contained'>Download</Button>
          </Box>

          <Box>
            <Image src={imgTemp} width='1000px' height='800px' alt='this is image'></Image>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
