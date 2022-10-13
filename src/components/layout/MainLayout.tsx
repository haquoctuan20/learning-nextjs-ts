import { Box, Container, Stack } from '@mui/material';
import { LayoutProps } from '@src/models';
import Header from '../header';
import Footer from './Footer';

export function MainLayout(props: LayoutProps) {
  return (
    <Stack minHeight='100vh'>
      <Header />

      <Box component='main' flexGrow={1}>
        <Container sx={{ backgroundColor: 'primary.main' }} fixed>
          {props.children}
        </Container>
      </Box>

      <Footer />
    </Stack>
  );
}
