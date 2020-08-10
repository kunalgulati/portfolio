import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

/** Delete */
import AcUnitIcon from '@material-ui/icons/AcUnit';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px"
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
    // backgroundColor: 'red'
  },
  principlePaper: {
    padding: theme.spacing(),
    textAlign: 'center',
    color: 'blue',
  },
  principleBody: {
    padding: theme.spacing(1),
    textAlign: 'center',
    marginBottom: theme.spacing(8),
  }
}));

export default function AboutDescription() {
  const classes = useStyles();

  return (
    <React.Fragment >
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h2" component="h3" align="center" className={classes.paper}>
            Hi, I’m Kunal.
            I’m a full-stack developer and UX researcher
            based in Vancouver, Canada
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" component="h5" align="center" className={classes.paper}>
            I value autonomy and responsibility.
            I am super organized.
            I am very curious and I love to learn and read.
            I am creative and innovative.
            Good to know: I am an awesome vegan cook and run a lifestyle blog Petite {'&'} Minimal.☺
          </Typography>
        </Grid>
      </Grid>

      <Divider variant="middle" />

      {/** Principles Grid */}
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12} sm={3}>
          <Typography variant="h2" component="h3" align="center" className={classes.principlePaper}> Clean Code</Typography>
          <Typography variant="h5" component="h2" align="center" className={classes.principleBody}>
            Clean code requires thinking and planning,
            and it makes your future work less stressful
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h2" component="h3" align="center" className={classes.principlePaper}> Clean Code</Typography>
          <Typography variant="h5" component="h2" align="center" className={classes.principleBody}>
            Clean code requires thinking and planning,
            and it makes your future work less stressful
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h2" component="h3" align="center" className={classes.principlePaper}> Clean Code</Typography>
          <Typography variant="h5" component="h2" align="center" className={classes.principleBody}>
            Clean code requires thinking and planning,
            and it makes your future work less stressful
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h2" component="h3" align="center" className={classes.principlePaper}> Clean Code</Typography>
          <Typography variant="h5" component="h2" align="center" className={classes.principleBody}>
            Clean code requires thinking and planning,
            and it makes your future work less stressful
          </Typography>
        </Grid>
      </Grid>

      <Divider variant="middle" />

      {/** Developer Tool Belt */}
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h4" component="h5" align="center" className={classes.paper}> Full Stack Developer Belt</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h2" component="h3" align="center" className={classes.principlePaper}> Clean Code</Typography>
          <Typography variant="h5" component="h2" align="center" className={classes.principleBody}>
            Clean code requires thinking and planning,
            and it makes your future work less stressful
          </Typography>
        </Grid>
      </Grid>

      <Divider variant="middle" />

      {/** UX Research Tool Belt */}
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h4" component="h5" align="center" className={classes.paper}> UX Reseach Tool Belt</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h2" component="h3" align="center" className={classes.principlePaper}> Clean Code</Typography>
          <Typography variant="h5" component="h2" align="center" className={classes.principleBody}>
            Clean code requires thinking and planning,
            and it makes your future work less stressful
          </Typography>
        </Grid>
      </Grid>

      <Divider variant="middle" />

      {/** UX Research Tool Belt */}
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h4" component="h5" align="center" className={classes.paper}> Intersted in Learning</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h2" component="h3" align="center" className={classes.principlePaper}> Clean Code</Typography>
          <Typography variant="h5" component="h2" align="center" className={classes.principleBody}>
            Clean code requires thinking and planning,
            and it makes your future work less stressful
          </Typography>
        </Grid>
      </Grid>

        <Divider variant="middle" />

    </React.Fragment>
  );
}
