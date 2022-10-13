import { NextPageWithLayout } from '@src/models';
import { ReactElement } from 'react';
import { MainLayout } from '@src/components/layout';

const Home: NextPageWithLayout = () => {
  return <div>this is home page</div>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
