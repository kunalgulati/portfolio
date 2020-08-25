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
    flex: '1'
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
    // bgcolor: "background.paper",
  },
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

/** Create a box of all LInk */
const LinkIconBox = (props) => {
  const classes = useStyles();
  const linkData = props.linkProps;

  const GithubBox = () => {
    if (linkData.githubLink !== null) {
      return (
        <Box p={1}>
          <Button variant="contained" color="primary" href={linkData.githubLink}>GitHub</Button>
        </Box>
      )
    } else { return (<></>) }
  };
  const DemoBox = () => {
    if (linkData.demoLink !== null) {
      return (
        <Box p={1}>
          <Button variant="contained" color="primary" href={linkData.demoLink}>Demo</Button>
        </Box>
      )
    } else { return (<></>) }
  };
  const MediumBox = () => {
    if (linkData.mediumLink !== null) {
      return (
        <Box p={1}>
          <Button variant="contained" color="primary" href={linkData.mediumLink}>Medium</Button>
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
    <>
      <Timeline align="alternate">
        {data.map((value, index) => {
          return (
            <TimelineItem xs={12} className={classes.timelineItemRoot} key={`timelineItem-${index}`}>
              <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                  {value.year}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
              </TimelineSeparator>
              {/* Content */}
              <TimelineContent className={classes.timelineContent}>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">{value.title}</Typography>
                    <LinkIconBox linkProps={value.links} />
                    <br></br>

                    {value.description.split('\n').map((item, key) => {
                      return <Typography component="p" key={key}>{item}</Typography>
                    })}
                  </Paper>
              </TimelineContent>
            </TimelineItem>
            // </Grid>
          )
        })}
      </Timeline>
    </>
  );
}