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

const useStyles = makeStyles((theme) => ({
  root: {
    // paddingTop: '5%',
    paddingBottom: '2%',
    backgroundColor: theme.palette.primary.main
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
      <Grid item xs={12} className={classes.titleRoot} key={"education-title"}>
        <Paper className={classes.paperHeading}>
          <Typography variant="h2" component="h3">03 Education</Typography><br></br>
        </Paper>
      </Grid>

      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="subtitle1" color="textSecondary">
              <b>{"September, 2016 - April, 2020"}</b>
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={0} className={classes.paper}>
              <Typography variant="h4" component="h5" className={classes.title}>{"Simon Fraser University, Canada"}</Typography>
              <Typography variant="subtitle1" component="p" className={classes.description}><b>Program :</b> Bachelor of Science </Typography>
              <Typography variant="subtitle1" component="p" className={classes.description}><b>Major :</b> Computing Science </Typography>
              <Typography variant="subtitle1" component="p" className={classes.description}><b>Certificate :</b> Charles Chang Innovation Certificate (Beedie School of Business) </Typography>
              <br />

              <Typography variant="subtitle1" component="p" className={classes.description}>
                {`SFU's and the faculty member have continuously promoted an interdisciplinary culture regardless of our major. I decided to leverage the opportunity by combining computing science major with entrepreneurship certificate. Which allowed me to look at problems from a technical, user design, and business perspective. I
                      I used my knowledge of business design, software development with user research & prototyping to develop serviceable products/services based on end-user needs, in a sustainable way, while aligning with the company's mission`}
              </Typography>

            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="subtitle1" color="textSecondary">
              <b>{"January, 2018 - May, 2018"}</b>
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={0} className={classes.paper}>
              <Typography variant="h4" component="h5" className={classes.title}>{"Uppsala University, Sweden"}</Typography>
              <Typography variant="subtitle1" component="p" className={classes.description}><b>Program :</b> Bachelor of Applied Science </Typography>
              <Typography variant="subtitle1" component="p" className={classes.description}><b>Major :</b> {"Information Technology & Human-Computer Interaction"} </Typography>
              <br />

              <Typography variant="subtitle1" component="p" className={classes.description}>
                {`I wanted more from my education than just coding in front of my computer. So, I decided to take an exchange term in one of the best human interaction programs in Europe at Uppsala University. The masters level courses introduced me to human interaction principals, rapid prototyping, and what it means to develop products for end-user`}
              </Typography>

            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );

}
