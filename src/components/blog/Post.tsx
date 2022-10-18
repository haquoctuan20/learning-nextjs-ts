import React from 'react';
import { Box, Typography, Stack, Chip } from '@mui/material';
import { Post } from '@/models';
import { format } from 'date-fns';

interface Props {
  post: Post;
}

export function Post({ post }: Props) {
  return (
    <Box>
      <Typography variant='h5' gutterBottom>
        {post.title}
      </Typography>

      <Stack direction='row' spacing={1}>
        {post.tagList.map((tag, index) => (
          <Chip variant='outlined' sx={{ fontSize: 12 }} size='small' key={index} label={tag} />
        ))}
      </Stack>

      <Typography variant='caption' color='text.secondary' gutterBottom>
        {format(Number(post.publishedDate), 'dd/MM/yyyy')}
      </Typography>

      <Typography variant='body2' mt={4}>
        {post.description}
      </Typography>
    </Box>
  );
}
