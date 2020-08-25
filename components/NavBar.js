import React from 'react';
import { useRouter } from 'next/router'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
    router.push('./about')
  };

  const handleHomeClick = (e)=>{
    e.preventDefault();
    router.push('./')
  }
  const handleCodingProjectClick =(e)=> {
    e.preventDefault();
    router.push('./codingProjects');
  }

  const handleUxProjectsClick =(e)=> {
    e.preventDefault();
    router.push('./uxProjects');
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={handleHomeClick}>Home</Button>
          {/* <Button color="inherit" onClick={handleAboutClick}>About</Button> */}
          <Button color="inherit" onClick={handleCodingProjectClick}>Coding Project</Button>
          <Button color="inherit" onClick={handleUxProjectsClick}>UX Project</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}