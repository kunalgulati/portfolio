import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'

/** Import Data */
import codingData from '../../lib/data/codingProject'

const useStyles = makeStyles((theme) => ({
  root: {
    // paddingTop: '5%',
    paddingBottom: '2%',
    backgroundColor: theme.palette.secondary.main
  },
  timelineItemRoot: {
    width: '100%',
  },
  timelineContent: {
    marginBottom: theme.spacing(4),
  },
  linkBoxRoot: {
    display: "flex",
    flexDirection: "row",
    paddingRight: '5px',
  },
  titleRoot: {
    marginTop: theme.spacing(4),
  },
  paperHeading: {
    padding: '6px 16px',
    backgroundColor: theme.palette.secondary.dark,
    color: "#ffffff",
    textAlign: 'center',
  },
  paper: {
    padding: '6px 16px',
    backgroundColor: 'transparent',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    color: "primary"
  },
  description: {
    color: "secondary"
  },
  button:{
    backgroundColor: '#f2f6f5',
    textTransform: 'none'

  }
}));

/** Create a box of all LInk */
const LinkIconBox = (props) => {
  const classes = useStyles();
  const linkData = props.linkProps;

  const GithubBox = () => {
    if (linkData.githubLink !== null) {
      return (
        <Box p={1}>
          <Button variant="contained" className={classes.button} href={linkData.githubLink}>GitHub</Button>
        </Box>
      )
    } else { return (<></>) }
  };
  const DemoBox = () => {
    if (linkData.demoLink !== null) {
      return (
        <Box p={1}>
          <Button variant="contained" className={classes.button} href={linkData.demoLink}>Demo</Button>
        </Box>
      )
    } else { return (<></>) }
  };
  const MediumBox = () => {
    if (linkData.mediumLink !== null) {
      return (
        <Box p={1}>
          <Button variant="contained" className={classes.button} href={linkData.mediumLink}>Medium</Button>
        </Box>
      )
    } else { return (<></>) }
  };

  return (
    <>
      <Box p={1} m={1} className={classes.linkBoxRoot}>
        <DemoBox />
        <GithubBox />
        <MediumBox />
      </Box>
    </>
  )
};

export default function CustomizedTimeline() {
  const classes = useStyles();
  const data = codingData.projectData || [];

  return (
    <div className={classes.root}>

      <Grid item xs={12} className={classes.titleRoot} key={"programming-title"}>
        <Paper className={classes.paperHeading}>
          <Typography variant="h2" component="h3">01 Programming Projects</Typography><br></br>
        </Paper>
      </Grid>

      <Timeline align="alternate">
        {data.map((value, index) => {
          return (
            <TimelineItem xs={12} className={classes.timelineItemRoot} key={`timelineItem-${index}`}>
              <TimelineOppositeContent>
              <Typography variant="subtitle1" color="textSecondary">
                  <b>{value.year}</b>
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              {/* Content */}
              <TimelineContent className={classes.timelineContent}>
                <Paper elevation={0} className={classes.paper}>
                  <Typography variant="h4" component="h5" className={classes.title}>
                    {value.title}
                  </Typography>
                  <LinkIconBox linkProps={value.links} />
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