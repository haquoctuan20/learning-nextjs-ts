import { Work } from '@/models';
import { Box, Container, Typography } from '@mui/material';
import { WorkList } from '@/components/work';

const workList: Work[] = [
  {
    id: '1',
    title: 'Lorem dolor sit.',
    fullDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, voluptatum voluptas ab ipsa iure qui. Rerum libero vel, ab quas cum vero nobis, eaque placeat dignissimos soluta sint quam dolores.',
    shortDescription:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio eligendi ut quisquam aut exercitationem facere t.',
    createdAt: new Date().getTime().toString(),
    updatedAt: new Date().getTime().toString(),
    tagList: ['Tag001', 'Tag002', 'Tag003'],
    thumbnailUrl: 'https://picsum.photos/200/300',
  },
  {
    id: '2',
    title: 'Lorem ipsum sit.',
    fullDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, voluptatum voluptas ab ipsa iure qui. Rerum libero vel, ab quas cum vero nobis, eaque placeat dignissimos soluta sint quam dolores.',
    shortDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam totam natus iusto pariatur at numquam nemo.',
    createdAt: new Date().getTime().toString(),
    updatedAt: new Date().getTime().toString(),
    tagList: ['Tag002'],
    thumbnailUrl: 'https://picsum.photos/200/300',
  },
  {
    id: '3',
    title: 'Lorem ipsum dolor .',
    fullDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, voluptatum voluptas ab ipsa iure qui. Rerum libero vel, ab quas cum vero nobis, eaque placeat dignissimos soluta sint quam dolores.',
    shortDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.busdam fuga dolores natus iusto pariatur at numquam nemo.',
    createdAt: new Date().getTime().toString(),
    updatedAt: new Date().getTime().toString(),
    tagList: ['Tag002', 'Tag003'],
    thumbnailUrl: 'https://picsum.photos/200/300',
  },
];

export function FeatureWorks() {
  return (
    <Box component='section' py={4}>
      <Container fixed>
        <Typography mb={2}>Feature works</Typography>

        <WorkList workList={workList} />
      </Container>
    </Box>
  );
}
