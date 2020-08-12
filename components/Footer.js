import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <>
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        https://kunalgulati.vercel.app/
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    <Typography>{"Made with Love by Kunal Gulati"}</Typography>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(10, 2),
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(10),
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">My sticky footer can be found here.</Typography>
          <Copyright />
        </Container>
      </footer>
    </>
  );
}
