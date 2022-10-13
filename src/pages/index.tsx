import { NextPageWithLayout } from '@src/models';
import { ReactElement } from 'react';
import { MainLayout } from '@src/components/layout';
import { Box } from '@mui/material';
import Hero from '@src/components/home/Hero';

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Hero />
    </Box>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
