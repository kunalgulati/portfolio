import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(10),
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    width: "80%",
  },
  image: {
    width: 800,
    height: 400,
  },
  img: {
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  techStackIcon:{
    marginTop: theme.spacing(2)
  },
  launchButton:{
    marginTop: theme.spacing(2)
  }
}));

export default function ProjectTemplate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} >
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://source.unsplash.com/1600x900/?nature,water" />
            </ButtonBase>
          </Grid>
          <Grid item sm container>
            <Grid item container direction="column">
              <Grid item>
                <Typography gutterBottom variant="h4">
                  Project Name
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Description
                </Typography>
                <Typography variant="h4" >
                  Technology Stack
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Technology Stack description
                </Typography>
              </Grid>
              <Grid item className={classes.techStackIcon}>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Icons for tech Stack
                </Typography>
              </Grid>
              <Grid item className={classes.launchButton}>
                <Button>
                  <Typography variant="subtitle1">Button</Typography>
                </Button>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
