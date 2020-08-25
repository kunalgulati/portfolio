import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <>
    <Typography variant="h5" >
      {'Copyright © '}
      <Link color="inherit" href="https://kunalgulati.vercel.app/">
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    <Typography variant="h6" >Made with Love by <b>Kunal Gulati</b></Typography>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#000000',
    padding: theme.spacing(10, 2),
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(10),
    color: '#FFFFFF',
    textAlign: 'center'
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    </>
  );
}
