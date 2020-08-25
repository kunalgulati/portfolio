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
  button: {
    color: "textPrimary",
    textTransform: "none",
    paddingRight: theme.spacing(5),
  }
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
      <AppBar position="static" elevation={0} backgroundColor={"transparent"}>
        <Toolbar>
          <Button  className={classes.button} onClick={handleHomeClick}>
            <Typography variant="h5" component="h5" >Home</Typography>
          </Button>
          {/* <Button  className={classes.button} onClick={handleCodingProjectClick}>
            <Typography variant="h5" component="h5">Coding Project</Typography>
          </Button> */}
          {/* <Button  className={classes.button} onClick={handleUxProjectsClick}> */}
          <Button  className={classes.button} target='_blank' href="https://kunalsgulati.wixsite.com/myportfolio/portfolio" >
            <Typography variant="h5" component="h5">UX Project</Typography>
          </Button>
          <Button  className={classes.button}>
            <Typography variant="h5" component="h5">Contact</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}