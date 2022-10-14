import { MainLayout } from '@/components/layout';
import React, { ReactElement } from 'react';

const WorksPage = () => {
  return <div>WorksPage</div>;
};

WorksPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default WorksPage;
