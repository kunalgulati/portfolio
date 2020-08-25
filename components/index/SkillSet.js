import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import {
  uxSkills,
  backendProgrammingSkills,
  frontEndProgrammingSkills,
  otherSkills
} from "../../lib/data/skills";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "100%",
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
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography variant="h4" component="h1">01 Professional</Typography><br></br>
          <Typography >My Knowledge Level in Software development and Design Thinking (UX)</Typography><br></br>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <Typography variant="h4" component="h1">UX Research</Typography><br></br>
          <List className={classes.root} subheader={<li />}>
            {uxSkills.map((item) => (
              <ListItem key={`item-${item}`}>
                <ListItemText primary={`${item}`} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <Typography variant="h4" component="h1">Back-End</Typography><br></br>
          <List className={classes.root}>
            {backendProgrammingSkills.map((item) => (
              <ListItem key={`item-${item}`}>
                <ListItemText primary={`${item}`} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <Typography variant="h4" component="h1">Front-End</Typography><br></br>
          <List className={classes.root}>
            {frontEndProgrammingSkills.map((item) => (
              <ListItem key={`item-${item}`}>
                <ListItemText primary={`${item}`} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <Typography variant="h4" component="h1">Programming Related</Typography><br></br>
          <List className={classes.root}>
            {otherSkills.map((item) => (
              <ListItem key={`item-${item}`}>
                <ListItemText primary={`${item}`} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
}
