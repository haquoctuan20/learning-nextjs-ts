import { NextPageWithLayout } from '@/models';
import { ReactElement } from 'react';
import { MainLayout } from '@/components/layout';
import { Box } from '@mui/material';
import { RecentPosts, Hero, FeatureWorks } from '@/components/home';
import { SEOComponent } from '@/components/SEO';

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <SEOComponent
        data={{
          title: 'Home page | Learning NextJS',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, voluptatum voluptas ab ipsa iure qui. Rerum libero vel, ab quas cum vero nobis, eaque placeat dignissimos soluta sint quam dolores.',
          url: 'http://learning-nextjs-ts.vercel.app',
          thumbnailUrl: 'https://picsum.photos/200/300',
        }}
      />

      <Hero />
      <RecentPosts />
      <FeatureWorks />
    </Box>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
