import { globalRoutingContext } from "../App";
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  }
}));

const TrackingPaused = (props) => {
  const classes = useStyles();
  const session = props['session'];
return (
    <globalRoutingContext.Consumer>
      {({ 
            handleRoute
              }) => ( 
          <Container component="main" maxWidth="xs">      
          <CssBaseline />       
          <div className={classes.paper}>    
            <Typography component="h1" variant="h5">
                    Tracking Paused for session {session}
            </Typography>            
            <br></br>
            <br></br>
            <Button
            variant="outlined"
            fullWidth
            autoFocus
            id="ExtBtn"
            onClick={() => {
              handleRoute('TrackingSession')
            }}
            >
                      Resume Tracking
            </Button>
          </div>
          </Container>          
)}
    </globalRoutingContext.Consumer>
);};

export default TrackingPaused;