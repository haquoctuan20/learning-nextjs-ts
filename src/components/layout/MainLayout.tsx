import { Box, Stack } from '@mui/material';
import { LayoutProps } from '@/models';
import Header from '../header';
import Footer from './Footer';

export function MainLayout(props: LayoutProps) {
  return (
    <Stack minHeight='100vh'>
      <Header />

      <Box component='main' flexGrow={1}>
        {props.children}
      </Box>

      <Footer />
    </Stack>
  );
}
