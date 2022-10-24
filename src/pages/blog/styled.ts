import { Container, styled } from '@mui/material';

// export const ContainerStyled = styled(Container)({
//   '& img': {
//     borderRadius: '4px',
//     maxWidth: '100%',
//   },

//   backgroundColor: 'primary',
//   '& > div > ul:first-of-type': {
//     backgroundColor: 'primary.main',
//   },
// });

export const ContainerStyled = styled(Container)(({ theme }) => ({
  '& img': {
    borderRadius: '4px',
    maxWidth: '100%',
  },

  '& > div > ul:first-of-type': {
    backgroundColor: theme.palette.secondary.light,
    padding: '10px 20px',
    borderRadius: '8px',
    fontSize: 18,

    '& a': {
      color: 'inherit',
      textDecoration: 'none',

      '&:hover': {
        color: theme.palette.primary.main,
      },
    },

    '& , & ul': {
      listStyle: 'none',
    },
  },
}));
