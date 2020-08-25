import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '10%',
    marginBottom: '10%',
    marginLeft: '5%',
    marginRight: '5%',
  },
  paper: {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    textAlign: 'center',
    backgroundColor: "transparent",
  },
  buttonGroupRoot: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ViewButton = () => {
  const classes = useStyles();

  return (
    <div className={classes.buttonGroupRoot}>
      <ButtonGroup variant="contained" color="secondary" aria-label="contained primary button group" >
        <Button href="/codingProjects">
          <Typography variant="h5" component="h5" >View Coding Project</Typography>
        </Button>
        <Button href="/uxProjects">
          <Typography variant="h5" component="h5" >View UX Project</Typography>
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={0}>
          <Typography variant="h1" component="h2">Hey, It's Kunal Here!</Typography><br></br>
          <Typography variant="h5" component="subtitle1">
            I am a Computing Science and Entrepreneurship Grad (April 2020). <br></br>
            A Software Engineer along with skills of Service Designer, who wants to create Simplistic Solution and write Clean Code to achieve your Business Requirements at an economical cost <br /><br />
          </Typography>
          {/* <ViewButton /> */}
        </Paper>
      </Grid>
    </div>
  );
}
