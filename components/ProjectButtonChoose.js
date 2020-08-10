import React, { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px"
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
  },
}));



const DesignerProject = () =>{
  return (
    <>
      <h1>Wait</h1>
    </>
  );
};

const SoftwareDeveloperProject = () =>{  
    return (
    <>
      <h1>No Wait</h1>
    </>
    )
};


export default function ProjectButtonChoose() {
  const classes = useStyles();
  const [state, setState]  = useState(0);
  
  const DisplayProjects = () =>{
    if(state==0){
      return <DesignerProject />;
    }else{
      return <SoftwareDeveloperProject />
    }
  }  

  /** Loads the Software developer Project Grid */
  const handleSoftwareProjectClick = () => {
    setState(1);
  };

  /** Loads the UX / Product Designer Project Grid */
  const handleDesignerProjectClick = () => {
    setState(0);
  };


  return (
    <React.Fragment >
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12} sm={6}>
          <Button  onClick={handleSoftwareProjectClick}>
            <Typography variant="h4" component="h4" align="center" className={classes.paper}>Software Developer</Typography>
          </Button>
          
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button onClick={handleDesignerProjectClick}>
          <Typography variant="h4" component="h4" align="center" className={classes.paper}>UX Research / Product Designer</Typography>
          </Button>
        </Grid>
      </Grid>

      <Divider variant="middle" />

      <DisplayProjects />

    </React.Fragment>
  );
}
