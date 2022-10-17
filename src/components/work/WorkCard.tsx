import { Work } from '@/models';
import { Box, Chip, Stack, Typography } from '@mui/material';
import { borderRadius } from '@mui/system';
import { format } from 'date-fns';
import Image from 'next/image';
import React from 'react';

interface WorkCardProps {
  work: Work;
}

export function WorkCard({ work }: WorkCardProps) {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
      <Box width={{ xs: '100%', md: '250px' }} flexShrink={0}>
        <Image
          style={{ borderRadius: '8px' }}
          src={work.thumbnailUrl}
          width={250}
          height={180}
          layout='responsive'
          alt=''
        />
      </Box>

      <Box>
        <Typography variant='h5' gutterBottom>
          {work.title}
        </Typography>

        <Stack direction='row' spacing={1}>
          {work.tagList.map((tag, index) => (
            <Chip variant='outlined' sx={{ fontSize: 12 }} size='small' key={index} label={tag} />
          ))}
        </Stack>

        <Typography variant='body2' mt={4}>
          {work.shortDescription}
        </Typography>
      </Box>
    </Stack>
  );
}
