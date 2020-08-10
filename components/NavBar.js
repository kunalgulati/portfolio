import React from 'react';
import { useRouter } from 'next/router'


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const router = useRouter();

  
  const handleAboutClick = (e) => {
    e.preventDefault()
    router.push('./About')
  };

  const handleProjectsClick = (e) => {
    e.preventDefault()
    router.push('./Projects')
  };

  return (
    <React.Fragment>

    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={handleAboutClick}>
            <Typography variant="h6" className={classes.title}>About</Typography>
          </Button>
          <Button color="inherit" onClick={handleProjectsClick}>
            <Typography variant="h6" className={classes.title}>Projects</Typography>
          </Button>
          <Button color="inherit">
            <Typography variant="h6" className={classes.title}>Contact</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
    </React.Fragment>
  );
}
