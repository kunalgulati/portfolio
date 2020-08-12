import Head from 'next/head'
/** Custom Modules */
import NavBar from '../components/NavBar';
import ProjectOutlook from '../components/ProjectOutlook';
import Footer from '../components/Footer';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  MainGridRoot: {
    flexGrow: 1,
    marginTop: theme.spacing(5)
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: 'red',
  },
  listRoot: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    // maxHeight: 300,
  },
}));


const DescriptionList = () => {
  const classes = useStyles();

  return (
    <List className={classes.listRoot} >
      <ListItem key={`name-key`}>
        <ListItemText primary={"Kunal Gulati"} />
      </ListItem>
      <ListItem key={`name-key`}>
        <ListItemText varient="h1"> <Typography component="h1" varient="h1">{"Software Developer & UX Researcher"}</Typography> </ListItemText>
      </ListItem>
      <ListItem key={`name-key`}>
        <ListItemText primary={"Web developer"} />
      </ListItem>
    </List>
  );
}

const Main = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={1} className={classes.MainGridRoot} alignItems='center'>
        <Grid item xs={4} >
          <Paper className={classes.paper}>item</Paper>

        </Grid>
      </Grid>
    </>
  );
}



export default function Home() {
  return (
    <>
      <NavBar />
      <Main />
      <DescriptionList />
      <ProjectOutlook />
      <ProjectOutlook />
      <ProjectOutlook />
      <Footer />
    </>

  )
}
