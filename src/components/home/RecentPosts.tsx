import { Box, Container, Stack, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import { PostCard } from '@/components/home';
import { Post } from '@/models';

const postList: Post[] = [
  {
    id: '1',
    title: 'Lorem ipsum dolor sit.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio eligendi ut quisquam aut exercitationem facere libero, optio minus iure quaerat.',
    publishedDate: new Date().getTime().toString(),
    tagList: ['Tag001', 'Tag002', 'Tag003'],
  },
  {
    id: '2',
    title: 'Lorem ipsum dolor sit.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam totam quod quibusdam fuga dolores natus iusto pariatur at numquam nemo.',
    publishedDate: new Date().getTime().toString(),
    tagList: ['Tag002', 'Tag003'],
  },
];

export function RecentPosts() {
  return (
    <Box component='section' bgcolor={'secondary.light'} py={4}>
      <Container fixed>
        <Stack direction='row' justifyContent='space-between'>
          <Typography>Recent Posts</Typography>

          <Link passHref href='/blog'>
            <MuiLink>View all</MuiLink>
          </Link>
        </Stack>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          sx={{
            '& > div': {
              width: {
                xs: '100%',
                md: '50%',
              },
            },
          }}
          mt={2}
          spacing={2}
        >
          {postList.map((post) => (
            <Box key={post.id}>
              <PostCard post={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
