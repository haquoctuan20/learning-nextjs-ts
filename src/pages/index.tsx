import { NextPageWithLayout } from '@/models';
import { ReactElement } from 'react';
import { MainLayout } from '@/components/layout';
import { Box } from '@mui/material';
import { RecentPosts, Hero } from '@/components/home';

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Hero />
      <RecentPosts />
    </Box>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
