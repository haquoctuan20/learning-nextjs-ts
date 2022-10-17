import { Work } from '@/models';
import { Box, Divider } from '@mui/material';
import React, { Fragment } from 'react';
import { WorkCard } from './WorkCard';

interface WorkListProps {
  workList: Work[];
}

export function WorkList({ workList }: WorkListProps) {
  if (workList.length === 0) return null;

  return (
    <Box>
      {workList.map((work, index) => {
        return (
          <Fragment key={index}>
            <WorkCard work={work} />
            <Divider sx={{ my: 4 }} />
          </Fragment>
        );
      })}
    </Box>
  );
}
