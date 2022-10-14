import { MainLayout } from '@/components/layout';
import React, { ReactElement } from 'react';

const BlogPage = () => {
  return <div>BlogPage</div>;
};

BlogPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default BlogPage;
