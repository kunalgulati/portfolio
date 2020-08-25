import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

import workExperience from '../../lib/data/workExperience';

const useStyles = makeStyles((theme) => ({
  titleRoot: {
    marginTop: theme.spacing(4),
  },
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();
  console.log(workExperience)

  return (
  <>
    <Grid item xs={12} className={classes.titleRoot} key={"workexperience-title"}>
      <Paper className={classes.paper}>
        <Typography variant="h4" component="h1" align="center">02 Work Experience</Typography><br></br>
        <Typography align="center" >My Knowledge Level in Software development and Design Thinking (UX)</Typography><br></br>
      </Paper>
    </Grid>

    <Timeline align="alternate">
    {workExperience.data.map((value, index) => {
          return (
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body1" color="textSecondary">
            {value.date}
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              {value.title}
            </Typography>
            <Typography>{value.name}, {value.location} </Typography>
            <br/>
            {value.description.split('\n').map((item, key) => {
                return <Typography component="p" key={key}>{item}</Typography>
            })}
          </Paper>
        </TimelineContent>
      </TimelineItem>
          )})}
    </Timeline>
  </>
  );

}
