import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    // minWidth: 275,
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: theme.spacing(4)
  },
  cardContent: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  media: {
    // paddingTop: '75%', // 16:9
    height: '400px',

  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      <Grid container justify='center' spacing={3} className={classes.root}>
        <Grid item xs={12} justify='center' key="infistyle">
          <Card className={classes.card}>
          <CardMedia
              className={classes.media}
              image="https://source.unsplash.com/random"
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                InfiniStyle
              </Typography>
              <Typography variant="body2" component="p">
                A venture inspired by Ellen Macarthur Foundation's work around the circular economy. Infinistyle, started as a venture looking into possibilities of launching a clothing line made from fabrics produced from food and crop waste; Which evolved to  web service for independent consignment stores (second-hand clothing retailers), with a limited to non-existent online presence to sell their unique mid or high end clothing items
              </Typography>
              <br></br>
              <Typography variant="body2" component="p">
                <b>Accomplishment</b>:  3rd Runner's up in ___
              </Typography>
              <Typography variant="body2" component="p">
                <b>Year</b>: 2017
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary" target='_blank' href="/pdf/infinstyle-research.pdf">
                Learn More
              </Button>
                {/* Learn More */}
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Grid item xs={12} justify='center' key="hsbc">
          <Card className={classes.card}>
          <CardMedia
              className={classes.media}
              image="https://source.unsplash.com/random"
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                HSBC x Deloitte
              </Typography>
              <Typography variant="body2" component="p">
              With the changing demographics, HSBC wanted to start shifting it's main customer base from baby boomers, to Millenials. And wanted to start developing products {"&"} financial services which meet the needs of  millenials, without having to lose their old/existing customers (Baby bombers). Talking to the bank executives, we understood the extensive international services offered by HSBC

              </Typography>
              <br></br>
              <Typography variant="body2" component="p">
                <b>Accomplishment</b>: Winning SFU Team
              </Typography>
              <Typography variant="body2" component="p">
                <b>Year</b>: 2017
              </Typography>
            </CardContent>
            <CardActions>
            <Button variant="contained" color="primary" target='_blank' href="https://kunalsgulati.wixsite.com/myportfolio/hsbc-x-deloitte" >
                Learn More
              </Button>
                {/* Learn More */}
            </CardActions>
          </Card>
        </Grid>
    </>
  );
}
