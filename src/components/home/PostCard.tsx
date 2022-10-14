import { Post } from '@/models';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { format } from 'date-fns';

type Props = {
  post: Post;
};

export function PostCard({ post }: Props) {
  if (!post) return null;

  return (
    <Card sx={{ minHeight: 280 }}>
      <CardContent>
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
      </CardContent>
    </Card>
  );
}
