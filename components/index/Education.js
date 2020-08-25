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
  root:{
    // paddingTop: '5%',
    paddingBottom: '2%',
    backgroundColor: theme.palette.primary.main
  },
  titleRoot: {
    marginTop: theme.spacing(4),
  },
  paper: {
    padding: '6px 16px',
  },
  paperHeading:{
    padding: '6px 16px',
    backgroundColor: theme.palette.secondary.dark,
    color: "#ffffff",
    textAlign: 'center',
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
            <Typography variant="body1" color="textSecondary">
              {"September, 2016 - April, 2020"}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">{"Simon Fraser University, Canada"}</Typography>
              <Typography><b>Program :</b> Bachelor of Science </Typography>
              <Typography><b>Major :</b> Computing Science </Typography>
              <Typography><b>Certificate :</b> Charles Chang Innovation Certificate (Beedie School of Business) </Typography>
              <br />

              <Typography component="p" key={"education-sfu"}>
                {`SFU's and the faculty member have continuously promoted an interdisciplinary culture regardless of our major. I decided to leverage the opportunity by combining computing science major with entrepreneurship certificate. Which allowed me to look at problems from a technical, user design, and business perspective. I
                      I used my knowledge of business design, software development with user research & prototyping to develop serviceable products/services based on end-user needs, in a sustainable way, while aligning with the company's mission`}
              </Typography>

            </Paper>
          </TimelineContent>
        </TimelineItem>        
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body1" color="textSecondary">
              {"January, 2018 - May, 2018"}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">{"Uppsala University, Sweden"}</Typography>
              <Typography><b>Program :</b> Bachelor of Applied Science </Typography>
              <Typography><b>Major :</b> {"Information Technology & Human-Computer Interaction"} </Typography>
              <br />

              <Typography component="p" key={"education-uppsala"}>
                {`I wanted more from my education than just coding in front of my computer. So, I decided to take an exchange term in one of the best human interaction programs in Europe at Uppsala University. The masters level courses introduced me to human interaction principals, rapid prototyping, and what it means to develop products for end-user`}
              </Typography>

            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );

}
