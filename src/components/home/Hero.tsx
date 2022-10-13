import React from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';

import imgTemp from '@src/assets/img/image.jpg';

const Hero = () => {
  return (
    <Box component='section'>
      <Container fixed>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Box>
            <Typography>
              Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Illo, consequatur.
            </Typography>

            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi minima
              cumque commodi! Id laborum vel placeat rem eveniet possimus corporis quasi pariatur
              nostrum officia. Veritatis voluptates accusantium perferendis doloribus tempora,
              voluptas in rem earum laborum veniam aliquid pariatur quis rerum sed deserunt qui sint
            </Typography>

            <Button variant='contained'>Download</Button>
          </Box>

          <Box>
            <Image src={imgTemp} width='600px' height='600px' alt='this is image'></Image>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
