import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
      <>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h1" component="h2">Hey, It's Kunal Here!</Typography><br></br>
            <Typography variant="h5" component="subtitle1">
              I am a computing science and entrepreneurship student. A software engineer turned service designer, I'm thrilled to embrace complex design challenges that will achieve your business and user goals, simplistically at an economical cost. <br/><br/>
              Today's institutes have trained the students (including me) with a technocratic ideology. Which trained me to solve the problems that are particular to an area of technology, but I believe to innovate one needs to be curious and seek inspiration from other fields of studies and systems. <br/><br/>
              I want to create services/solutions for humans, by asking questions of values, meaning and purpose, along with technocratic ones. <br/><br/>
            </Typography>

          </Paper>
        </Grid>
    </>
  );
}
