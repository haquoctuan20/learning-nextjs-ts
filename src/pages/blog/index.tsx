import { Post } from '@/components/blog';
import { MainLayout } from '@/components/layout';
import { getPostList } from '@/utils';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import React, { ReactElement } from 'react';
import { Container, Divider, Typography } from '@mui/material';
import Link from 'next/link';

interface BlogListProps {
  posts: any[];
}

const BlogPage = ({ posts }: BlogListProps) => {
  return (
    <Container fixed>
      <Typography mb={3} component='h1' variant='h3'>
        Blog
      </Typography>

      {posts.map((post, index) => (
        <React.Fragment key={index}>
          <Link href={`/blog/${post.slug}`} passHref>
            <a style={{ textDecoration: 'none', color: 'inherit' }}>
              <Post post={post} />
            </a>
          </Link>

          <Divider sx={{ my: 4 }} />
        </React.Fragment>
      ))}
    </Container>
  );
};

BlogPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps: GetStaticProps<BlogListProps> = async () => {
  const postList = await getPostList();

  return {
    props: {
      posts: postList,
    },
  };
};

export default BlogPage;
