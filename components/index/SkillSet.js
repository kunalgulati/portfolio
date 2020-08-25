import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import {
  uxSkills,
  backendProgrammingSkills,
  frontEndProgrammingSkills,
  otherSkills
} from "../../lib/data/skills";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    paddingBottom: '2%'
  },
  listRoot: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "100%",
    backgroundColor: 'transparent',
  },
  paperHeader: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height: "100%",
    backgroundColor: theme.palette.secondary.dark,
    color: "#FFFFFF",
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12}>
        <Paper className={classes.paperHeader} elevation={0}>
          <Typography variant="h2" component="h3">02 Skills</Typography><br></br>
          {/* <Typography variant="h5" >My Knowledge Level in Software development and Design Thinking (UX)</Typography><br></br> */}
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper} elevation={0}>
          <Typography variant="h4" component="h5">UX Research</Typography><br></br>
          <List className={classes.listRoot} subheader={<li />}>
            {uxSkills.map((item) => (
              <ListItem key={`item-${item}`}>
                <Typography variant="h6" component="body1">{item}</Typography><br></br>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper} elevation={0}>
          <Typography variant="h4" component="h5">Back-End</Typography><br></br>
          <List className={classes.listRoot}>
            {backendProgrammingSkills.map((item) => (
              <ListItem key={`item-${item}`}>
                <ListItemText>
                  <Typography variant="h6" component="body1">{item}</Typography><br></br>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper} elevation={0}>
          <Typography variant="h4" component="h5">Front-End</Typography><br></br>
          <List className={classes.listRoot}>
            {frontEndProgrammingSkills.map((item) => (
              <ListItem key={`item-${item}`}>
                <Typography variant="h6" component="body1">{item}</Typography><br></br>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper} elevation={0}>
          <Typography variant="h4" component="h5">Programming Related</Typography><br></br>
          <List className={classes.listRoot}>
            {otherSkills.map((item) => (
              <ListItem key={`item-${item}`}>
                <Typography variant="h6" component="body1">{item}</Typography><br></br>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
}
