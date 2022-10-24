import { MainLayout } from '@/components/layout';
import { Post } from '@/models';
import { SlugBlogContainerStyled } from '@/styled';
import { getPostList } from '@/utils';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ReactElement } from 'react';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkToc from 'remark-toc';
import { unified } from 'unified';
import reporter from 'vfile-reporter';
interface PostContentProps {
  post: Post;
}

function PostContent({ post }: PostContentProps) {
  return (
    <SlugBlogContainerStyled fixed>
      <div dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}></div>
    </SlugBlogContainerStyled>
  );
}

PostContent.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postList = await getPostList();

  return {
    paths: postList.map((post: Post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

/**
 * ứng với mỗi slug sẽ chạy một getStaticProps
 * @returns
 */
export const getStaticProps: GetStaticProps<PostContentProps> = async (
  context: GetStaticPropsContext
) => {
  const postList = await getPostList();

  const slug = context.params?.slug;
  if (!slug) return { notFound: true };

  const post = postList.find((post) => post.slug === slug);
  if (!post) return { notFound: true };

  const html_unified = await unified()
    .use(remarkToc, { heading: 'Table của nội dung' })
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: post.title })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .process(post.mdContent || '');

  post.htmlContent = String(html_unified);
  console.error(post.title, reporter(html_unified));

  return {
    props: {
      post: post,
    },
  };
};

export default PostContent;
