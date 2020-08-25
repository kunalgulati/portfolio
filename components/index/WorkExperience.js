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
  root: {
    // paddingTop: '5%',
    paddingBottom: '2%',
    backgroundColor: theme.palette.secondary.main
  },
  titleRoot: {
    marginTop: theme.spacing(4),
  },
  paper: {
    padding: '6px 16px',
    backgroundColor: "transparent"
  },
  paperHeading: {
    padding: '6px 16px',
    backgroundColor: theme.palette.secondary.dark,
    color: "#ffffff",
    textAlign: 'center',
  },
  title: {
    color: "primary"
  },
  locationTitle: {
    color: '#464948'
  },
  description: {
    color: "secondary"
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12} className={classes.titleRoot} key={"workexperience-title"}>
        <Paper className={classes.paperHeading}>
          <Typography variant="h2" component="h3" >02 Work Experience</Typography><br></br>
        </Paper>
      </Grid>

      <Timeline align="alternate">
        {workExperience.data.map((value, index) => {
          return (
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography variant="subtitle1" color="textSecondary">
                  <b>{value.date}</b>
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={0} className={classes.paper}>
                  <Typography variant="h4" component="h5" className={classes.title}>
                    {value.title}
                  </Typography>
                  <Typography variant="h6" component="body1" className={classes.locationTitle}>
                    {value.name}, {value.location} <br />
                  </Typography>
                  <br />
                  {value.description.split('\n').map((item, key) => {
                    return (
                      <Typography variant="subtitle1" component="p" key={key} className={classes.description}>{item}</Typography>
                    )
                  })}
                </Paper>
              </TimelineContent>
            </TimelineItem>
          )
        })}
      </Timeline>
    </div>
  );

}
